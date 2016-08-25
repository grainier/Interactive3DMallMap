/*
 * Copyright (c)  2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Created by grainier on 8/16/16.
 */
var Home = (function (homeJson) {
    /** TODO :
     * Questions
     * 1. Websockets or HTTP?
     * 2. Keep separate analytics? Show only one analytic at a time i.e Electricity analytics or Thermostat analytics?
     * 3. If above is the case, how to show correlated, general analytics such as weather analytics?
     * 4. If HTTP, how does the poling mechanism going to work, and how Siddhi going to persist analytics in RDBMS??
     * 5. Is it ok to use HTTP poling and RDBMS with this scenario (it'll pass most of the work to the backend, which is good since there's lot of ui stuff to be handled in the front end)
     */

    /**
     * Private variables
     */
    var ANALYTICS_ENDPOINT = "http://host:port/analytics",
        scope = this,
        homeSpec,
        homeId,
        levels = {},        //  { key (levelId) : val ([levelId:applianceId, ... ])
        types = {},         //  { key (type) : val ([levelId:applianceId, ... ])
        appliances = {};    //  { key (levelId:applianceId str) : val (appliance obj) }

    /**
     * Init Home object
     */
    function init() {
        homeSpec = homeJson;
        homeId = homeSpec.id;
        initAppliances()
    }

    /**
     *
     */
    function initAppliances() {
        for (var i = 0; i < homeJson.floors.length; i++) {
            parseAppliances(homeJson.floors[i].id, homeJson.floors[i].svg)
                .forEach(function (appliance) {
                    addAppliance(appliance);
                })
        }
    }

    /**
     * Parse the floor SVG and return appliances map
     * @param levelId
     * @param svg
     */
    function parseAppliances(levelId, svg) {
        var typeRoom = 'data-type="room"',
            typeAppliance = 'data-type="appliance"',
            aId, aSpace, aType, aItem, res = [];
        svg.split('<').forEach(function (line) {
            if (~line.indexOf(typeRoom) || ~line.indexOf(typeAppliance)) {
                aId = line.match(/id=["|'](.*?)["|']/);
                aSpace = line.match(/data-space=["|'](.*?)["|']/);
                aType = line.match(/data-type=["|'](.*?)["|']/);
                aItem = line.match(/data-item=["|'](.*?)["|']/);
                if (aId && aSpace && aType && aItem) {
                    res.push({
                        id: levelId + ':' + aId[1],
                        level: levelId,
                        space: aSpace[1],
                        type: aType[1],
                        item: aItem[1]
                    })
                }
            }
        });
        return res
    }

    function getHomeSpec() {
        return homeSpec;
    }

    /**
     *
     * @param appliance
     */
    function addAppliance(appliance) {
        if (!(appliance.level in levels)) levels[appliance.level] = [];
        if (!(appliance.type in types)) types[appliance.type] = [];
        appliances[appliance.id] = appliance;
        levels[appliance.level].push(appliance.id);
        types[appliance.type].push(appliance.id);
    }

    /**
     *
     * @param appliance
     */
    function updateAppliance(appliance) {
        // updating on map would be enough, it'll
        // update other places with references
        var existing = levels[appliance.id];
        existing.type = appliance.type;
        existing.updated = "updated"
    }

    /**
     *
     * @param applianceId
     */
    function removeAppliance(applianceId) {
        delete appliances[applianceId];
        delete levels[applianceId]
    }

    /**
     *
     */
    function printAppliances() {
        console.log("appliances : " + JSON.stringify(appliances));
        console.log("levels : " + JSON.stringify(levels));
        console.log("types : " + JSON.stringify(types))
    }

    function getAnalytics(fqApplianceId, callback) {
        /*
            var res = {
                homeId : "",
                levelId : "",
                applianceID : "",
                analytics: [{
                    type : "hourly_usage",
                    name : "Hourly Usage",
                    value : [
                        {time: 1, value: 1.0},
                        {time: 1, value: 1.0},
                        {time: 1, value: 1.0}
                    ]
                }]
            };
        */
        var username = "admin";
        var password = "admin";
        var server_url = "https://192.168.1.4:9543/portal/apis/analytics";
        var client = new AnalyticsClient().init(username, password, server_url);
        var query = buildQuery(fqApplianceId, "SOME_ANALYTICS_TABLE");
        client.search(
            query,
            function (data) {
                console.log(JSON.stringify(data))
            },
            function (data) {
                console.error(data)
            }
        )
    }

    function buildQuery(fqApplianceId, analyticsTable) {
        var fqai = fqApplianceId.split(':'), query = null;
        if (fqai.length == 2) {
            query = {
                homeId: homeId,
                levelId: fqai[0],
                applianceId: fqai[1]
            };
            // TODO : build the query here
            /*{
                tableName: "ORG_WSO2_IOT_ANALYTICS_STREAM_HOURLYPOWERCONSUMPTIONSTREAM",
                searchParams: {
                    query : "ApplianceType : light",
                        start : 0,
                        count : 10,
                }
            }*/
        }
        return query;
    }

    function getAlertedDevices(floorId, warningType, callback) {
        var username = "admin";
        var password = "admin";
        var server_url = "http://localhost:9763/portal/apis/analytics";
        var client = new AnalyticsClient().init(username, password, server_url);

        var query = {
            tableName: "ORG_WSO2_IOT_ANALYTICS_STREAM_ALERTSTREAM",
            searchParams: {
            }
        };

        client.searchCount(
            query,
            function (data) {
                data = JSON.parse(data.message);
                var rowCount = parseInt(data);
                var searchQuery = "HomeID:" + homeId;
                if(null != floorId) {
                    searchQuery = searchQuery + " and FloorLevel:" + floorId;
                }
                if(null != warningType) {
                    searchQuery = searchQuery + " and WarningType:" + warningType;
                }
                var query = {
                    tableName: "ORG_WSO2_IOT_ANALYTICS_STREAM_ALERTSTREAM",
                    searchParams: {
                        query : searchQuery,
                        start : 0,
                        count : rowCount
                    }
                };
                client.search(
                    query,
                    function (data) {
                        data = JSON.parse(data.message);
                        var alertedObjects = [];
                        for(var j=0; j < data.length; j++) {
                            alertedObjects.push(data[j].values);
                        }
                        callback(alertedObjects);
                    },
                    function (data) {
                        console.error(data)
                    }
                )
            },
            function (data) {
                console.error(data)
            }
        )
    }
    
    function getAlerts() {
        return [
            {
                FloorLevel:1,
                WarningType:"alert",
                ApplianceId:"basement:batteries"
            },
            {
                FloorLevel:1,
                WarningType:"warning",
                ApplianceId:"basement:hrv"
            },
            {
                FloorLevel:2,
                WarningType:"info",
                ApplianceId:"livingroom:tv"
            },
            {
                FloorLevel:2,
                WarningType:"warning",
                ApplianceId:"livingroom:subwoofer"
            },
            {
                FloorLevel:2,
                WarningType:"info",
                ApplianceId:"livingroom:ac"
            },
            {
                FloorLevel:3,
                WarningType:"alert",
                ApplianceId:"master:ac"
            }
        ]
    }
    /**
     * Run the init()
     */
    init();

    /**
     * Expose public variables / methods
     */
    return {
        addAppliance: addAppliance,
        updateAppliance: updateAppliance,
        removeAppliance: removeAppliance,
        printAppliances: printAppliances,
        getAlertedDevices: getAlertedDevices,
        getHomeSpec: getHomeSpec,
        getAlerts: getAlerts,
    }
});
