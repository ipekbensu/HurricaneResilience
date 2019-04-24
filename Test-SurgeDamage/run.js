// debugging in node
// var functions = require('./functions.js');
// var csv = require('./all-geocodes-v2016.js'); // not used
// var csv2 = require('./DMG_PTS_Harvey_20170829.js');
// var csv3 = require('./DMG_PTS_Irma_20170914.js');
// var csv4 = require('./DMG_PTS_Nate_20171010.js');
// var csv5 = require('./HarveyWindspeeds.js');
// var csv6 = require('./HarveyDamageCount_Residential.js');
// var csv7 = require('./IrmaWindspeeds.js');
// var csv8 = require('./IrmaDamageCount_Residential.js');
// var csv9 = require('./NateWindspeeds.js');
// var csv10 = require('./NateDamageCount_Residential.js');

var states = {
    metadata: [
        'State',
        'FIPS code'
    ],
    data: [
        ['Texas', '48'],
        ['SouthCarolina', '45'],
        ['Georgia', '13'],
        ['Florida', '12'],
        ['Alabama', '01'],
        ['Mississippi', '28']
    ]
};
var counties = {
    metadata: {
        State: [
            'County',
            'FIPS code'
        ]
    },
    data: {
        Texas: [
            ['Aransas', '48007'],
            ['Brazoria', '48039'],
            ['Calhoun', '48057'],
            ['Chambers', '48071'],
            ['DeWitt', '48123'],
            ['FortBend', '48157'],
            ['Galveston', '48167'],
            ['Harris', '48201'],
            ['Jackson', '48239'],
            ['Jefferson', '48245'],
            ['Lavaca', '48285'],
            ['Liberty', '48291'],
            ['Matagorda', '48321'],
            ['Montgomery', '48339'],
            ['Nueces', '48355'],
            ['Refugio', '48391'],
            ['SanPatricio', '48409'],
            ['Victoria', '48469'],
            ['Walker', '48471'] // could be '48473'
        ],
        SouthCarolina: [
            ['Beaufort', '45013'],
            ['Berkeley', '45015'],
            ['Charleston', '45019'],
            ['Colleton', '45029'],
            ['Dorchester', '45035'],
            ['Jasper', '45053']
        ],
        Georgia: [
            ['Bryan', '13029'],
            ['Camden', '13039'],
            ['Chatham', '13051'],
            ['Glynn', '13127'],
            ['Liberty', '13179'],
            ['McIntosh', '13191']
        ],
        Florida: [
            ['Charlotte', '12015'],
            ['Clay', '12019'],
            ['Collier', '12021'],
            ['Duval', '12031'],
            ['Hillsborough', '12057'],
            ['Lee', '12071'],
            ['Manatee', '12081'],
            ['MiamiDade', '12086'],
            ['Monroe', '12087'],
            ['Nassau', '12089'],
            ['Pinellas', '12103'],
            ['Putnam', '12107'],
            ['Sarasota', '12115'],
            ['StJohns', '12109']
        ],
        Alabama: [
            ['Mobile', '01097'],
            ['Baldwin', '01003']
        ],
        Mississippi: [
            ['Hancock', '28045'],
            ['Harrison', '28047'],
            ['Jackson', '28059']
        ]
    }
};
var countiesHarvey = {
    metadata: {
        State: [
            'County'
        ]
    },
    data: {
        Texas: [
            'Aransas',
            'Brazoria',
            'Calhoun',
            'Chambers',
            'DeWitt',
            'FortBend',
            'Galveston',
            'Harris',
            'Jackson',
            'Jefferson',
            'Lavaca',
            'Liberty',
            'Matagorda',
            'Montgomery',
            'Nueces',
            'Refugio',
            'SanPatricio',
            'Victoria',
            'Walker'
        ]
    }
};
var countiesIrma = {
    metadata: {
        State: [
            'County'
        ]
    },
    data: {
        SouthCarolina: [
            'Beaufort',
            'Berkeley',
            'Charleston',
            'Colleton',
            'Dorchester',
            'Jasper'
        ],
        Georgia: [
            'Bryan',
            'Camden',
            'Chatham',
            'Glynn',
            'Liberty',
            'McIntosh'
        ],
        Florida: [
            'Charlotte',
            'Clay',
            'Collier',
            'Duval',
            'Hillsborough',
            'Lee',
            'Manatee',
            'MiamiDade',
            'Monroe',
            'Nassau',
            'Pinellas',
            'Putnam',
            'Sarasota',
            'StJohns'
        ]
    }
};
var countiesNate = {
    metadata: {
        State: [
            'County'
        ]
    },
    data: {
        Alabama: [
            'Mobile',
            'Baldwin'
        ],
        Mississippi: [
            'Hancock',
            'Harrison',
            'Jackson'
        ]
    }
};

var hazusHarvey = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "minor"',
                '%% of residential "moderate"',
                '%% of residential "severe"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "minor"',
                // '# of residential "moderate"',
                // '# of residential "severe"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};
var hazusIrma = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "minor"',
                '%% of residential "moderate"',
                '%% of residential "severe"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "minor"',
                // '# of residential "moderate"',
                // '# of residential "severe"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};
var hazusNate = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "minor"',
                '%% of residential "moderate"',
                '%% of residential "severe"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "minor"',
                // '# of residential "moderate"',
                // '# of residential "severe"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};

// ~~~~~~~~~~~~~~~~~~~~
// note to self:
// get surge results
// ~~~~~~~~~~~~~~~~~~~~
hazusHarvey.data = functions.readHazus(states.data, counties.data, csv5, csv6);
hazusIrma.data = functions.readHazus(states.data, counties.data, csv7, csv8);
hazusNate.data = functions.readHazus(states.data, counties.data, csv9, csv10);
// test
// console.log(hazusHarvey.data.Texas);
// console.log(hazusIrma.data.SouthCarolina);
// console.log(hazusNate.data.Alabama);

var femaHarvey = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "affected"',
                '%% of residential "minor"',
                '%% of residential "major"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "affected"',
                // '# of residential "minor"',
                // '# of residential "major"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};
var femaIrma = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "affected"',
                '%% of residential "minor"',
                '%% of residential "major"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "affected"',
                // '# of residential "minor"',
                // '# of residential "major"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};
var femaNate = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '# of residential',
                '%% of residential "no damage"',
                '%% of residential "affected"',
                '%% of residential "minor"',
                '%% of residential "major"',
                '%% of residential "destruction"'
                // '# of residential "no damage"',
                // '# of residential "affected"',
                // '# of residential "minor"',
                // '# of residential "major"',
                // '# of residential "destruction"'
            ]
        }
    },
    data: {}
};

femaHarvey.data = functions.readFEMA(states.data, counties.data, csv2);
femaIrma.data = functions.readFEMA(states.data, counties.data, csv3);
femaNate.data = functions.readFEMA(states.data, counties.data, csv4);
// test
// console.log(femaHarvey.data.Texas);
// console.log(femaIrma.data.SouthCarolina);
// console.log(femaNate.data.Alabama);

var compareHarvey = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '%-off residential',
                '%-off %% of residential "no damage"',
                '%-off %% of residential "minor / affected"',
                '%-off %% of residential "moderate / minor"',
                '%-off %% of residential "severe / major"',
                '%-off %% of residential "destruction"'
            ]
        }
    },
    data: {}
};
var compareIrma = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '%-off residential',
                '%-off %% of residential "no damage"',
                '%-off %% of residential "minor / affected"',
                '%-off %% of residential "moderate / minor"',
                '%-off %% of residential "severe / major"',
                '%-off %% of residential "destruction"'
            ]
        }
    },
    data: {}
};
var compareNate = {
    metadata: {
        State: {
            County: [
                'Ave. windspeed',
                '%-off residential',
                '%-off residential "no damage"',
                '%-off residential "minor / affected"',
                '%-off residential "moderate / minor"',
                '%-off residential "severe / major"',
                '%-off residential "destruction"'
            ]
        }
    },
    data: {}
};

compareHarvey.data = functions.compare(states.data, counties.data, hazusHarvey.data, femaHarvey.data);
compareIrma.data = functions.compare(states.data, counties.data, hazusIrma.data, femaIrma.data);
compareNate.data = functions.compare(states.data, counties.data, hazusNate.data, femaNate.data);
// test
// console.log(compareHarvey.data.Texas);
// console.log(compareIrma.data.SouthCarolina);
// console.log(compareNate.data.Alabama);

var coord = {
    metadata: [
        [
            // about location
            'State',
            'County',
            '# of residential', // from FEMA, actual
            'Latitude',
            'Longitude'
        ],
        [
            // about hazard
            'Hurricane',
            'Windspeed', // from Hazus, actual
            'Category' // Saffir-Simpson scale // plot
        ],
        [
            // from Hazus, estimated, due to wind
            '%%-minor damage (Hazus, due to wind)',
            '%%-moderate damage (Hazus, due to wind)',
            '%%-major damage (Hazus, due to wind)',
            '%%-destruction (Hazus, due to wind)',
            '%%-affected (Hazus, due to wind)' // plot
        ],
        [
            // from FEMA, actual, due to surge
            '%%-minor damage (FEMA, due to surge)',
            '%%-moderate damage (FEMA, due to surge)',
            '%%-major damage (FEMA, due to surge)',
            '%%-destruction (FEMA, due to surge)',
            '%%-affected (FEMA, due to surge)' // plot
        ],
        [
            // -: FEMA (surge) greater
            // +: Hazus (wind) greater
            'Difference %%-minor damage',
            'Difference %%-moderate damage',
            'Difference %%-major damage',
            'Difference %%-destruction',
            'Difference %%-affected' // plot
        ]
    ],
    data: []
};

functions.matchCoord(states.data, counties.data, hazusHarvey.data, femaHarvey.data, 'Harvey', coord.data);
functions.matchCoord(states.data, counties.data, hazusIrma.data, femaIrma.data, 'Irma', coord.data);
functions.matchCoord(states.data, counties.data, hazusNate.data, femaNate.data, 'Nate', coord.data);
// test
// console.log(coord);