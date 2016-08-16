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
     * Private variables / methods
     */
    var scope = this,
        levels = {},        //  { key (levelId) : val ([levelId:applianceId, ... ])
        types = {},         //  { key (type) : val ([levelId:applianceId, ... ])
        appliances = {};    //  { key (levelId:applianceId str) : val (appliance obj) }

    /**
     * Init Home object
     */
    function init() {
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
        printAppliances: printAppliances
    }
});

var h = new Home("Home 1");
var h2 = new Home("Home 1");
h.add({id: "abc", type: "type_a"});
h.print();
h2.print();
h.update({id: "abc", type: "type_b"});
h.print();
h2.print();
h.remove("abc");
h.print();
h2.print();

