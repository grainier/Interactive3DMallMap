var building = {
    id: "id",
    surrounding: "<svg> for surrounding goes here",
    floors: [
        {
            id: "Basement", // we ignore this for now just go with Level X
            title: "Basement", // do we really need this ???
            svg: '<svg class="map map--5" viewBox="0 0 1600 1200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">'
            + '<title>Basement</title>'
            + '<rect id="outline" data-type="outline" height="1200" width="1600" y="1.6667" x="0"/>'
            + '<rect id="floor" data-type="floor" height="1179" width="1579" y="10.492" x="10.492"/>'
            + '<rect id="Cellar" data-type="room" data-space="Cellar" height="714.45" width="819.45" y="462.94" x="755.28"/>'
            + '<rect id="BoilerRoom" data-type="room" data-space="BoilerRoom" height="656.23" width="554.56" y="521.05" x="21.884"/>'
            + '<rect id="LaundryRoom" data-type="room" data-space="LaundryRoom" height="321.34" width="653" y="22.665" x="23.499"/>'
            + '<rect id="basement:freezer" data-space="basement:freezer" data-type="appliance" data-item="freezer" height="20" width="20" y="586.67" x="875"/>'
            + '<rect id="basement:tv" data-space="basement:tv" data-type="appliance" data-item="tv" height="20" width="20" y="1067.6" x="896.8"/>'
            + '<rect id="basement:batteries" data-space="basement:batteries" data-type="appliance" data-item="battery" height="20" width="20" y="1056.7" x="1450"/>'
            + '<rect id="basement:desklamp" data-space="basement:desklamp" data-type="appliance" data-item="light" height="20" width="20" y="1063.3" x="1041.7"/>'
            + '<rect id="basement:washingmachine" data-space="basement:washingmachine" data-type="appliance" data-item="washingmachine" height="20" width="20" y="131.67" x="570"/>'
            + '<rect id="basement:dehumidifier" data-space="basement:dehumidifier" data-type="appliance" data-item="dehumidifier" height="20" width="20" y="653.33" x="123.33"/>'
            + '<rect id="basement:hrv" data-space="basement:hrv" data-type="appliance" data-item="hrv" height="20" width="20" y="1041.7" x="121.67"/>'
            + '<rect id="basement:waterpump" data-space="basement:waterpump" data-type="appliance" data-item="waterpump" height="20" width="20" y="1045" x="446.67"/>'
            + '</svg>'
        },
        {
            id: "Level 1", // we ignore this for now just go with Level X
            title: "Level 1", // do we really need this ???
            svg: '<svg class="map map--5" viewBox="0 0 1600 1200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">'
            + '<title>Level 1</title>'
            + '<rect id="outline" data-type="outline" height="1200" width="1600" y="1.6667" x="0"/>'
            + '<rect id="floor" data-type="floor" height="1179" width="1579" y="10.492" x="10.492"/>'
            + '<rect id="LivingRoom" data-type="room" data-space="LivingRoom" height="1144.3" width="717.68" y="26.994" x="856.99"/>'
            + '<rect id="Office" data-type="room" data-space="Office" height="427.99" width="542.99" y="27.674" x="30.507"/>'
            + '<rect id="Kitchen" data-type="room" data-space="Kitchen" height="539.56" width="686.23" y="628.72" x="27.553"/>'
            + '<rect id="livingroom:tv" data-space="livingroom:tv" data-type="appliance" data-item="tv" height="20" width="20" y="261.67" x="1163.3"/>'
            + '<rect id="kitchen:lights" data-space="kitchen:lights" data-type="appliance" data-item="light" height="20" width="20" y="786.67" x="353.33"/>'
            + '<rect id="kitchen:toaster" data-space="kitchen:toaster" data-type="appliance" data-item="toaster" height="20" width="20" y="1078.3" x="570"/>'
            + '<rect id="kitchen:tassimo" data-space="kitchen:tassimo" data-type="appliance" data-item="tassimo" height="20" width="20" y="1076.7" x="421.67"/>'
            + '<rect id="kitchen:panini" data-space="kitchen:panini" data-type="appliance" data-item="panini" height="20" width="20" y="1080" x="271.67"/>'
            + '<rect id="kitchen:telephone" data-space="kitchen:telephone" data-type="appliance" data-item="telephone" height="20" width="20" y="726.67" x="135"/>'
            + '<rect id="kitchen:coffeepot" data-space="kitchen:coffeepot" data-type="appliance" data-item="coffeepot" height="20" width="20" y="1081.7" x="130"/>'
            + '<rect id="kitchenhall:lights1" data-space="kitchenhall:lights1" data-type="appliance" data-item="light" height="20" width="20" y="951.67" x="353.33"/>'
            + '<rect id="kitchen:microwave" data-space="kitchen:microwave" data-type="appliance" data-item="microwave" height="20" width="20" y="853.33" x="131.67"/>'
            + '<rect id="kitchen:sink" data-space="kitchen:sink" data-type="appliance" data-item="sink" height="20" width="20" y="971.67" x="128.33"/>'
            + '<rect id="kitchen:refrigerator" data-space="kitchen:refrigerator" data-type="appliance" data-item="refrigerator" height="20" width="20" y="725" x="565"/>'
            + '<rect id="livingroom:subwoofer" data-space="livingroom:subwoofer" data-type="appliance" data-item="subwoofer" height="20" width="20" y="260" x="1301.7"/>'
            + '<rect id="livingroom:receiver" data-space="livingroom:receiver" data-type="appliance" data-item="receiver" height="20" width="20" y="123.33" x="1206.7"/>'
            + '<rect id="livingroom:dvd" data-space="livingroom:dvd" data-type="appliance" data-item="dvd" height="20" width="20" y="121.67" x="1350"/>'
            + '<rect id="livingroom:lamp2" data-space="livingroom:lamp2" data-type="appliance" data-item="light" height="20" width="20" y="1055" x="1456.7"/>'
            + '<rect id="livingroom:lamp1" data-space="livingroom:lamp1" data-type="appliance" data-item="light" height="20" width="20" y="1053.3" x="958.33"/>'
            + '<rect id="livingroom:roku" data-space="livingroom:roku" data-type="appliance" data-item="roku" height="20" width="20" y="120" x="1070"/>'
            + '<rect id="livingroom:lights1" data-space="livingroom:lights1" data-type="appliance" data-item="light" height="20" width="20" y="115" x="936.67"/>'
            + '<rect id="livingroom:sideporch" data-space="livingroom:sideporch" data-type="appliance" data-item="sideporch" height="20" width="20" y="468.33" x="1425"/>'
            + '<rect id="livingroom:firelights" data-space="livingroom:firelights" data-type="appliance" data-item="light" height="20" width="20" y="651.67" x="1426.7"/>'
            + '<rect id="livingroom:dininglights" data-space="livingroom:dininglights" data-type="appliance" data-item="light" height="20" width="20" y="801.67" x="1211.7"/>'
            + '<rect id="livingroom:fan" data-space="livingroom:fan" data-type="appliance" data-item="fan" height="20" width="20" y="611.67" x="950"/>'
            + '<rect id="livingroom:ac" data-space="livingroom:ac" data-type="appliance" data-item="ac" height="20" width="20" y="848.33" x="1451.7"/>'
            + '<rect id="livingroom:tivo" data-space="livingroom:tivo" data-type="appliance" data-item="tivo" height="20" width="20" y="261.67" x="1433.3"/>'
            + '<rect id="livingroom:cablebox" data-space="livingroom:cablebox" data-type="appliance" data-item="cablebox" height="20" width="20" y="261.67" x="1016.7"/>'
            + '<rect id="livingroom:wii" data-space="livingroom:wii" data-type="appliance" data-item="wii" height="20" width="20" y="458.33" x="1163.3"/>'
            + '<rect id="guest:monitor" data-space="guest:monitor" data-type="appliance" data-item="monitor" height="20" width="20" y="70" x="106.67"/>'
            + '<rect id="guest:laptop" data-space="guest:laptop" data-type="appliance" data-item="laptop" height="20" width="20" y="73.333" x="431.67"/>'
            + '<rect id="guest:desklamp" data-space="guest:desklamp" data-type="appliance" data-item="light" height="20" width="20" y="215" x="430"/>'
            + '<rect id="guest:lamp" data-space="guest:lamp" data-type="appliance" data-item="light" height="20" width="20" y="353.33" x="113.33"/>'
            + '<rect id="guest:clock" data-space="guest:clock" data-type="appliance" data-item="clock" height="20" width="20" y="351.67" x="430"/>'
            + '</svg>'
        },
        {
            id: "Level 2", // we ignore this for now just go with Level X
            title: "Level 2", // do we really need this ???
            svg: '<svg class="map map--5" viewBox="0 0 1600 1200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">'
            +'<title>Level 2</title>'
            +'<rect id="outline" data-type="outline" height="1200" width="1600" y="1.6667" x="0"/>'
            +'<rect id="floor" data-type="floor" height="1179" width="1579" y="10.492" x="10.492"/>'
            +'<rect id="MasterBedroom" data-type="room" data-space="MasterBedroom" height="639.45" width="892.79" y="21.106" x="20.273"/>'
            +'<rect id="BathRoom" data-type="room" data-space="BathRoom" height="434.65" width="541.32" y="734.34" x="21.842"/>'
            +'<rect id="Bedroom" data-type="room" data-space="Bedroom" height="697.87" width="597.87" y="21.066" x="971.9"/>'
            +'<rect id="masterbath:overheadlight" data-space="masterbath:overheadlight" data-type="appliance" data-item="light" height="20" width="20" y="60" x="1388.3"/>'
            +'<rect id="hall:lights1" data-space="hall:lights1" data-type="appliance" data-item="light" height="20" width="20" y="990" x="260"/>'
            +'<rect id="guestbath:sinklight" data-space="guestbath:sinklight" data-type="appliance" data-item="light" height="20" width="20" y="1093.3" x="460"/>'
            +'<rect id="stairs:lights1" data-space="stairs:lights1" data-type="appliance" data-item="light" height="20" width="20" y="796.67" x="463.33"/>'
            +'<rect id="frontporch:light" data-space="frontporch:light" data-type="appliance" data-item="light" height="20" width="20" y="950" x="456.67"/>'
            +'<rect id="guestbath:overheadlight" data-space="guestbath:overheadlight" data-type="appliance" data-item="light" height="20" width="20" y="798.33" x="83.333"/>'
            +'<rect id="guest:lights" data-space="guest:lights" data-type="appliance" data-item="light" height="20" width="20" y="876.67" x="263.33"/>'
            +'<rect id="guestbath:fan" data-space="guestbath:fan" data-type="appliance" data-item="fan" height="20" width="20" y="1100" x="85"/>'
            +'<rect id="master:macmini" data-space="master:macmini" data-type="appliance" data-item="macmini" height="20" width="20" y="581.67" x="833.33"/>'
            +'<rect id="master:monitor" data-space="master:monitor" data-type="appliance" data-item="monitor" height="20" width="20" y="70" x="730"/>'
            +'<rect id="master:desklamp" data-space="master:desklamp" data-type="appliance" data-item="light" height="20" width="20" y="176.67" x="838.33"/>'
            +'<rect id="master:cablemodem" data-space="master:cablemodem" data-type="appliance" data-item="cablemodem" height="20" width="20" y="65" x="833.33"/>'
            +'<rect id="master:nightstand2" data-space="master:nightstand2" data-type="appliance" data-item="nightstand" height="20" width="20" y="76.667" x="398.33"/>'
            +'<rect id="master:lamp1" data-space="master:lamp1" data-type="appliance" data-item="light" height="20" width="20" y="405" x="313.33"/>'
            +'<rect id="master:lights" data-space="master:lights" data-type="appliance" data-item="light" height="20" width="20" y="398.33" x="586.67"/>'
            +'<rect id="master:fan" data-space="master:fan" data-type="appliance" data-item="fan" height="20" width="20" y="70" x="633.33"/>'
            +'<rect id="master:ac" data-space="master:ac" data-type="appliance" data-item="ac" height="20" width="20" y="243.33" x="98.333"/>'
            +'<rect id="master:timemachine" data-space="master:timemachine" data-type="appliance" data-item="timemachine" height="20" width="20" y="80" x="95"/>'
            +'<rect id="master:printer" data-space="master:printer" data-type="appliance" data-item="printer" height="20" width="20" y="181.67" x="735"/>'
            +'<rect id="master:dcloset" data-space="master:dcloset" data-type="appliance" data-item="closet" height="20" width="20" y="413.33" x="103.33"/>'
            +'<rect id="master:jcloset" data-space="master:jcloset" data-type="appliance" data-item="closet" height="20" width="20" y="583.33" x="103.33"/>'
            +'<rect id="master:clock1" data-space="master:clock1" data-type="appliance" data-item="clock" height="20" width="20" y="308.33" x="838.33"/>'
            +'<rect id="master:iphone1" data-space="master:iphone1" data-type="appliance" data-item="iphone" height="20" width="20" y="181.67" x="636.67"/>'
            +'<rect id="master:clockphone" data-space="master:clockphone" data-type="appliance" data-item="clockphone" height="20" width="20" y="76.667" x="265"/>'
            +'<rect id="bedroom:maincloset" data-space="bedroom:maincloset" data-type="appliance" data-item="closet" height="20" width="20" y="68.333" x="1023.3"/>'
            +'<rect id="bedroom:lamp1" data-space="bedroom:lamp1" data-type="appliance" data-item="light" height="20" width="20" y="165" x="1260"/>'
            +'<rect id="bedroom:ac" data-space="bedroom:ac" data-type="appliance" data-item="ac" height="20" width="20" y="266.67" x="1481.7"/>'
            +'<rect id="bedroom:linencloset" data-space="bedroom:linencloset" data-type="appliance" data-item="closet" height="20" width="20" y="70" x="1115"/>'
            +'<rect id="bedroom:lights" data-space="bedroom:lights" data-type="appliance" data-item="light" height="20" width="20" y="336.67" x="1258.3"/>'
            +'<rect id="bedroom:nitelight" data-space="bedroom:nitelight" data-type="appliance" data-item="light" height="20" width="20" y="466.67" x="1256.7"/>'
            +'<rect id="masterbath:fan" data-space="masterbath:fan" data-type="appliance" data-item="fan" height="20" width="20" y="55" x="1470"/>'
            +'<rect id="bedroom:lamp2" data-space="bedroom:lamp2" data-type="appliance" data-item="light" height="20" width="20" y="635" x="1256.7"/>'
            +'<rect id="masterbath:sinklight" data-space="masterbath:sinklight" data-type="appliance" data-item="light" height="20" width="20" y="128.33" x="1471.7"/>'
            +'<rect id="bedroom:noise" data-space="bedroom:noise" data-type="appliance" data-item="noise" height="20" width="20" y="441.67" x="1015"/>'
            +'<rect id="bedroom:closet" data-space="bedroom:closet" data-type="appliance" data-item="closet" height="20" width="20" y="633.33" x="1480"/>'
            +'<rect id="bedroom:ipod" data-space="bedroom:ipod" data-type="appliance" data-item="ipod" height="20" width="20" y="646.67" x="1013.3"/>'
            +'<rect id="bedroom:video" data-space="bedroom:video" data-type="appliance" data-item="video" height="20" width="20" y="273.33" x="1018.3"/>'
            +'<rect id="bedroom:fan" data-space="bedroom:fan" data-type="appliance" data-item="fan" height="20" width="20" y="410" x="1480"/>'
            +'</svg>'
        }
    ]
};

$(function () {
    'use strict';
            // helper functions
            // from https://davidwalsh.name/vendor-prefix
            var prefix = (function () {
                var styles = window.getComputedStyle(document.documentElement, ''),
                    pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
                    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
                return {
                    dom: dom,
                    lowercase: pre,
                    css: '-' + pre + '-',
                    js: pre[0].toUpperCase() + pre.substr(1)
                };
            })();

            // vars & stuff
            var support = {transitions: Modernizr.csstransitions},
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
                transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
                onEndTransition = function (el, callback, propTest) {
                    var onEndCallbackFn = function (ev) {
                        if (support.transitions) {
                            if (ev.target != this || propTest && ev.propertyName !== propTest && ev.propertyName !== prefix.css + propTest) return;
                            this.removeEventListener(transEndEventName, onEndCallbackFn);
                        }
                        if (callback && typeof callback === 'function') {
                            callback.call(this);
                        }
                    };
                    if (support.transitions) {
                        el.addEventListener(transEndEventName, onEndCallbackFn);
                    }
                    else {
                        onEndCallbackFn();
                    }
                },
                home = new Home(building),
                levelTemplate = $.ajax({
                    type: "GET",
                    url: 'templates/level.html',
                    async: false
                }).responseText,
                alertTemplate = $.ajax({
                    type: "GET",
                    url: 'templates/alert.html',
                    async: false
                }).responseText,
                levelHbTemplate = Handlebars.compile(levelTemplate),
                alertHbTemplate = Handlebars.compile(alertTemplate),
                svg, type, item, appliance, floors, points = [], l, i,
                initLayout = (function () {
                    for (i = 0; i < building.floors.length; i++) {
                        points.length = 0;
                        l = i + 1;
                        svg = $(building.floors[i].svg);
                        $(svg).children().each(function (j) {
                            var k = j + 1,
                                type = $(this).attr("data-type"),
                                appliance = $(this).attr("id"),
                                item = $(this).attr("data-item"),
                                marker_enabled = false;
                            if (type !== undefined && type !== null) {
                                switch (type) {
                                    case 'appliance':
                                        $(this).addClass('map__hidden');
                                        marker_enabled = (item) ? true : false;
                                        break;
                                    case 'room':
                                        $(this).addClass('map__space');
                                        marker_enabled = true;
                                        break;
                                    case 'floor':
                                        $(this).addClass('map__ground');
                                        break;
                                    case 'outline':
                                        $(this).addClass('map__outline');
                                        break;
                                    case 'tree':
                                        $(this).addClass('map__tree');
                                        break;
                                    case 'lake':
                                        $(this).addClass('map__lake');
                                        break;
                                    default:
                                        break;
                                }
                                if (marker_enabled) {
                                    if (appliance !== undefined && appliance !== null && appliance.length > 0) {
                                        item = (item !== undefined && item !== null && item.length > 0) ? item : "default";
                                        points.push({
                                            appliance: appliance,
                                            level: l,
                                            marker: k,
                                            type: type,
                                            space: appliance,          // TODO
                                            label: "Some Lable",    // TODO
                                            icon: "img/icons/" + item + ".png"    // TODO
                                        });
                                    }
                                }
                            }
                        });
                        $('.levels').append(levelHbTemplate({
                            svg: $("<div />").append($(svg).clone()).html(),
                            pins: points
                        }));
                        $('ul.grouped-by-alert-type').append(alertHbTemplate({
                            alerts: home.getAlertedDevices(null, null)
                        }));
                    }
                    floors = $(".level");
                    for (var i = 0; i < floors.length; i++) {
                        var l = i + 1;
                        var css_class = "level--" + l;
                        var l_selector = "." + css_class;
                        if (l > 1) {
                            var h = i * (60 / floors.length);
                            css.addRule(l_selector, "-webkit-transform: translateZ(" + h + "vmin); transform: translateZ(" + h + "vmin);");
                        }
                        css.addRule(l_selector + "::after", "content: 'L" + l + "';");
                        css.addRule(".levels--selected-" + l + " .level:not(.level--" + l + ")", "opacity: 0;");
                        css.addRule(".levels--selected-" + l, "-webkit-transition-delay: 0.25s; transition-delay: 0.25s;");
                        css.addRule(".levels", "-webkit-transform:rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);transform:rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);");
                        css.addRule(".level.level--current", "-webkit-transform:translateZ(15vmin) rotate3d(0, 0, 1, 20deg);;transform:translateZ(15vmin) rotate3d(0, 0, 1, 20deg);");
                        $(floors[i]).addClass(css_class);
                        $(floors[i]).attr("aria-label", "Level " + l);
                        $(floors[i]).attr("data-level", l);
                        $(".levels").show(0.15);
                    }
                })(),
            // the mall element
                mall = document.querySelector('.mall'),
            // mall´s levels wrapper
                mallLevelsEl = mall.querySelector('.levels'),
            // mall´s levels
                mallLevels = [].slice.call(mallLevelsEl.querySelectorAll('.level')),
            // total levels
                mallLevelsTotal = mallLevels.length,
            // surroundings elems
                mallSurroundings = [].slice.call(mall.querySelectorAll('.surroundings')),
            // selected level position
                selectedLevel,
            // navigation element wrapper
                mallNav = document.querySelector('.mallnav'),
            // show all mall´s levels ctrl
                allLevelsCtrl = mallNav.querySelector('.mallnav__button--all-levels'),
            // levels navigation up/down ctrls
                levelUpCtrl = mallNav.querySelector('.mallnav__button--up'),
                levelDownCtrl = mallNav.querySelector('.mallnav__button--down'),
            // pins
                pins = [].slice.call(mallLevelsEl.querySelectorAll('.pin')),
            // content element
                contentEl = document.querySelector('.content'),
            // content close ctrl
                contentCloseCtrl = contentEl.querySelector('button.content__button'),
            // check if a content item is opened
                isOpenContentArea,
            // check if currently animating/navigating
                isNavigating,
            // check if all levels are shown or if one level is shown (expanded)
                isExpanded,
            // spaces list element
                spacesListEl = document.getElementById('spaces-list'),
            // spaces list ul
                spacesEl = spacesListEl.querySelector('ul.list'),
            // all the spaces listed
                spaces = [].slice.call(spacesEl.querySelectorAll('.list__item > a.list__link')),
            // reference to the current shows space (name set in the data-name attr of both the listed spaces and the pins on the map)
                spaceref,
            // sort by ctrls
                sortByNameCtrl = document.querySelector('#sort-by-name'),
            // listjs initiliazation (all mall´s spaces)
                spacesList = new List('spaces-list', {valueNames: ['list__link', {data: ['level']}, {data: ['category']}]}),

            // smaller screens:
            // open search ctrl
                openSearchCtrl = document.querySelector('button.open-search'),
            // main container
                containerEl = document.querySelector('.container'),
            // close search ctrl
                closeSearchCtrl = spacesListEl.querySelector('button.close-search');

            function init() {
                // init/bind ui/events
                initUI();
                initEvents();
            }

            /**
             * Initialize/Bind events fn.
             */
            function initEvents() {
                // click on a Mall´s level
                $(".levels").on("click", ".level", function () {
                    // shows this level
                    var level = $(this).attr("data-level");
                    showLevel(level);
                });

                // click on the show mall´s levels ctrl
                allLevelsCtrl.addEventListener('click', function () {
                    // shows all levels
                    showAllLevels();
                });

                // navigating through the levels
                levelUpCtrl.addEventListener('click', function () {
                    navigate('Down');
                });
                levelDownCtrl.addEventListener('click', function () {
                    navigate('Up');
                });

                // sort by name ctrl - add/remove category name (css pseudo element) from list and sorts the spaces by name
                sortByNameCtrl.addEventListener('click', function () {
                    if (this.checked) {
                        classie.remove(spacesEl, 'grouped-by-alert-type');
                        spacesList.sort('list__link');
                    }
                    else {
                        classie.add(spacesEl, 'grouped-by-alert-type');
                        spacesList.sort('category');
                    }
                });

                // hovering a pin / clicking a pin
                pins.forEach(function (pin) {
                    var contentItem = contentEl.querySelector('.content__item[data-space="' + pin.getAttribute('data-space') + '"]');

                    pin.addEventListener('mouseenter', function () {
                        if (!isOpenContentArea) {
                            classie.add(contentItem, 'content__item--hover');
                        }
                    });
                    pin.addEventListener('mouseleave', function () {
                        if (!isOpenContentArea) {
                            classie.remove(contentItem, 'content__item--hover');
                        }
                    });
                    pin.addEventListener('click', function (ev) {
                        ev.preventDefault();
                        // open content for this pin
                        openContent(pin.getAttribute('data-space'));
                        // remove hover class (showing the title)
                        classie.remove(contentItem, 'content__item--hover');
                    });
                });

                // closing the content area
                contentCloseCtrl.addEventListener('click', function () {
                    closeContentArea();
                });

                // clicking on a listed space: open level - shows space
                spaces.forEach(function (space) {
                    var spaceItem = space.parentNode,
                        level = spaceItem.getAttribute('data-level'),
                        spacerefval = spaceItem.getAttribute('data-space');

                    space.addEventListener('click', function (ev) {
                        ev.preventDefault();
                        // for smaller screens: close search bar
                        closeSearch();
                        // open level
                        showLevel(level);
                        // open content for this space
                        openContent(spacerefval);
                    });
                });

                // smaller screens: open the search bar
                openSearchCtrl.addEventListener('click', function () {
                    openSearch();
                });

                // smaller screens: close the search bar
                closeSearchCtrl.addEventListener('click', function () {
                    closeSearch();
                });
            }

            function initUI() {
                classie.add(spacesEl, 'grouped-by-alert-type');
                spacesList.sort('category');
            }

            /**
             * Opens a level. The current level moves to the center while the other ones move away.
             */
            function showLevel(level) {
                if (isExpanded) {
                    return false;
                }

                // update selected level val
                selectedLevel = level;

                // control navigation controls state
                setNavigationState();

                classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);

                // the level element
                var levelEl = mallLevels[selectedLevel - 1];
                classie.add(levelEl, 'level--current');

                onEndTransition(levelEl, function () {
                    classie.add(mallLevelsEl, 'levels--open');

                    // show level pins
                    showPins();

                    isExpanded = true;
                }, 'transform');

                // hide surroundings element
                hideSurroundings();

                // show mall nav ctrls
                showMallNav();

                // filter the spaces for this level
                showLevelSpaces();
            }

            /**
             * Shows all Mall´s levels
             */
            function showAllLevels() {
                if (isNavigating || !isExpanded) {
                    return false;
                }
                isExpanded = false;

                classie.remove(mallLevels[selectedLevel - 1], 'level--current');
                classie.remove(mallLevelsEl, 'levels--selected-' + selectedLevel);
                classie.remove(mallLevelsEl, 'levels--open');

                // hide level pins
                removePins();

                // shows surrounding element
                showSurroundings();

                // hide mall nav ctrls
                hideMallNav();

                // show back the complete list of spaces
                spacesList.filter();

                // close content area if it is open
                if (isOpenContentArea) {
                    closeContentArea();
                }
            }

            /**
             * Shows all spaces for current level
             */
            function showLevelSpaces() {
                spacesList.filter(function (item) {
                    return item.values().level === selectedLevel.toString();
                });
            }

            /**
             * Shows the level´s pins
             */
            function showPins(levelEl) {
                var levelEl = levelEl || mallLevels[selectedLevel - 1];
                classie.add(levelEl.querySelector('.level__pins'), 'level__pins--active');

                css.addRule(".levels", "-webkit-transform:'';transform:''");
                css.addRule(".level.level--current", "-webkit-transform:'';transform:''");
                $('.levels').hide().show(0);

                var level, marker, appliance_id;
                $(levelEl).find(".pin").each(function () {
                    level = $(this).attr("data-level");
                    marker = $(this).attr("data-marker");
                    appliance_id = $(this).attr("data-appliance");

                    var parent_rect = $(escapeForJQuery(appliance_id)).parent("svg")[0].getBoundingClientRect();
                    var rect = $(escapeForJQuery(appliance_id))[0].getBoundingClientRect();

                    var center = {
                        x: (rect.left - parent_rect.left) + (rect.width / 2),
                        y: (rect.top - parent_rect.top) + (rect.height / 2)
                    };
                    var pin_class = "pin--" + level + "-" + marker,
                        pin_selector = "." + pin_class;

                    css.addRule(pin_selector, "left: " + center.x + "px;top: " + center.y + "px;");
                    $(this).addClass(pin_class);
                });

                css.addRule(".levels", "-webkit-transform:rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);transform:rotateX(70deg) rotateZ(-45deg) translateZ(-15vmin);");
                css.addRule(".level.level--current", "-webkit-transform:translateZ(15vmin) rotate3d(0, 0, 1, 20deg);;transform:translateZ(15vmin) rotate3d(0, 0, 1, 20deg);");
                $('.levels').hide().show(0);

            }

            // TODO : move to a global location
            function escapeForJQuery( id ) {
                return "#" + id.replace( /(:|\.|\[|\]|,)/g, "\\$1" );
            }

            /**
             * Removes the level´s pins
             */
            function removePins(levelEl) {
                var levelEl = levelEl || mallLevels[selectedLevel - 1];
                classie.remove(levelEl.querySelector('.level__pins'), 'level__pins--active');
            }

            /**
             * Show the navigation ctrls
             */
            function showMallNav() {
                classie.remove(mallNav, 'mallnav--hidden');
            }

            /**
             * Hide the navigation ctrls
             */
            function hideMallNav() {
                classie.add(mallNav, 'mallnav--hidden');
            }

            /**
             * Show the surroundings level
             */
            function showSurroundings() {
                mallSurroundings.forEach(function (el) {
                    classie.remove(el, 'surroundings--hidden');
                });
            }

            /**
             * Hide the surroundings level
             */
            function hideSurroundings() {
                mallSurroundings.forEach(function (el) {
                    classie.add(el, 'surroundings--hidden');
                });
            }

            /**
             * Navigate through the mall´s levels
             */
            function navigate(direction) {
                if (isNavigating || !isExpanded || isOpenContentArea) {
                    return false;
                }
                isNavigating = true;

                var prevSelectedLevel = selectedLevel;

                // current level
                var currentLevel = mallLevels[prevSelectedLevel - 1];

                if (direction === 'Up' && prevSelectedLevel > 1) {
                    --selectedLevel;
                }
                else if (direction === 'Down' && prevSelectedLevel < mallLevelsTotal) {
                    ++selectedLevel;
                }
                else {
                    isNavigating = false;
                    return false;
                }

                // control navigation controls state (enabled/disabled)
                setNavigationState();
                // transition direction class
                classie.add(currentLevel, 'level--moveOut' + direction);
                // next level element
                var nextLevel = mallLevels[selectedLevel - 1];
                // ..becomes the current one
                classie.add(nextLevel, 'level--current');

                // when the transition ends..
                onEndTransition(currentLevel, function () {
                    classie.remove(currentLevel, 'level--moveOut' + direction);
                    // solves rendering bug for the SVG opacity-fill property
                    setTimeout(function () {
                        classie.remove(currentLevel, 'level--current');
                    }, 60);

                    classie.remove(mallLevelsEl, 'levels--selected-' + prevSelectedLevel);
                    classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);

                    // show the current level´s pins
                    showPins();

                    isNavigating = false;
                });

                // filter the spaces for this level
                showLevelSpaces();

                // hide the previous level´s pins
                removePins(currentLevel);
            }

            /**
             * Control navigation ctrls state. Add disable class to the respective ctrl when the current level is either the first or the last.
             */
            function setNavigationState() {
                if (selectedLevel == 1) {
                    classie.add(levelDownCtrl, 'boxbutton--disabled');
                }
                else {
                    classie.remove(levelDownCtrl, 'boxbutton--disabled');
                }

                if (selectedLevel == mallLevelsTotal) {
                    classie.add(levelUpCtrl, 'boxbutton--disabled');
                }
                else {
                    classie.remove(levelUpCtrl, 'boxbutton--disabled');
                }
            }

            /**
             * Opens/Reveals a content item.
             */
            function openContent(spacerefval) {
                // if one already shown:
                if (isOpenContentArea) {
                    hideSpace();
                    spaceref = spacerefval;
                    showSpace();
                }
                else {
                    spaceref = spacerefval;
                    openContentArea();
                }

                // remove class active (if any) from current list item
                var activeItem = spacesEl.querySelector('li.list__item--active');
                if (activeItem) {
                    classie.remove(activeItem, 'list__item--active');
                }
                // list item gets class active (if the list item is currently shown in the list)
                var listItem = spacesEl.querySelector('li[data-space="' + spacerefval + '"]');
                if (listItem) {
                    classie.add(listItem, 'list__item--active');
                }

                // remove class selected (if any) from current space
                var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
                if (activeSpaceArea) {
                    classie.remove(activeSpaceArea, 'map__space--selected');
                }
                // svg area gets selected
                classie.add(mallLevels[selectedLevel - 1].querySelector('svg > .map__space[data-space="' + spaceref + '"]'), 'map__space--selected');
            }

            /**
             * Opens the content area.
             */
            function openContentArea() {
                isOpenContentArea = true;
                // shows space
                showSpace(true);
                // show close ctrl
                classie.remove(contentCloseCtrl, 'content__button--hidden');
                // resize mall area
                classie.add(mall, 'mall--content-open');
                // disable mall nav ctrls
                classie.add(levelDownCtrl, 'boxbutton--disabled');
                classie.add(levelUpCtrl, 'boxbutton--disabled');
            }

            /**
             * Shows a space.
             */
            function showSpace(sliding) {
                // the content item
                var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
                // show content
                classie.add(contentItem, 'content__item--current');
                if (sliding) {
                    onEndTransition(contentItem, function () {
                        classie.add(contentEl, 'content--open');
                    });
                }
                // map pin gets selected
                classie.add(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
            }

            /**
             * Closes the content area.
             */
            function closeContentArea() {
                classie.remove(contentEl, 'content--open');
                // close current space
                hideSpace();
                // hide close ctrl
                classie.add(contentCloseCtrl, 'content__button--hidden');
                // resize mall area
                classie.remove(mall, 'mall--content-open');
                // enable mall nav ctrls
                if (isExpanded) {
                    setNavigationState();
                }
                isOpenContentArea = false;
            }

            /**
             * Hides a space.
             */
            function hideSpace() {
                // the content item
                var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
                // hide content
                classie.remove(contentItem, 'content__item--current');
                // map pin gets unselected
                classie.remove(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
                // remove class active (if any) from current list item
                var activeItem = spacesEl.querySelector('li.list__item--active');
                if (activeItem) {
                    classie.remove(activeItem, 'list__item--active');
                }
                // remove class selected (if any) from current space
                var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
                if (activeSpaceArea) {
                    classie.remove(activeSpaceArea, 'map__space--selected');
                }
            }

            /**
             * for smaller screens: open search bar
             */
            function openSearch() {
                // shows all levels - we want to show all the spaces for smaller screens
                showAllLevels();

                classie.add(spacesListEl, 'spaces-list--open');
                classie.add(containerEl, 'container--overflow');
            }

            /**
             * for smaller screens: close search bar
             */
            function closeSearch() {
                classie.remove(spacesListEl, 'spaces-list--open');
                classie.remove(containerEl, 'container--overflow');
            }

            init();

});