// debugging in node
// var functions = require('./functions.js');
// var csv = require('./all-geocodes-v2016.js'); // used on line 49
// var csv2 = require('./DEC_10_DP_DPDP1.js'); // used on line 97
// var csv3 = require('./dataBuilt.js);

var states = {
    metadata: [
        'State',
        'Abbreviation',
        'FIPS code'
    ],
    data: [
        ['Alabama', 'AL', '01'],
        ['Connecticut', 'CT', '09'],
        ['Delaware', 'DE', '10'],
        ['Florida', 'FL', '12'],
        ['Georgia', 'GA', '13'],
        ['Louisiana', 'LA', '22'],
        ['Maine', 'ME', '23'],
        ['Maryland', 'MD', '24'],
        ['Massachusetts', 'MA', '25'],
        ['Mississippi', 'MS', '28'],
        ['New Hampshire', 'NH', '33'],
        ['New Jersey', 'NJ', '34'],
        ['New York', 'NY', '36'],
        ['North Carolina', 'NC', '37'],
        ['Rhode Island', 'RI', '44'],
        ['South Carolina', 'SC', '45'],
        ['Texas', 'TX', '48'],
        ['Virginia', 'VA', '51']
    ]
};

var counties = {
    metadata: {
        State: [
            'County',
            'FIPS code'
        ]
    },
    data: {}
};
states.data.forEach(function(item){
    counties.data[item[1]] = functions.readCounties(item[2], csv);
});

// read SED info
var sedFL = {
    metadata: {
        County: {
            age: [ // age
                'Child (0-9 y/o)',
                'Adolescent (10-18 y/o)',
                'Young adult (19-29 y/o)',
                'Middle-aged adult (30-45 y/o)',
                'Older adult (46-65 y/o)',
                'Elder (65+ y/o)'
            ],
            eth: [ // ethnicity/race
                'White, non-Hispanic',
                'Non-white, non-Hispanic'
            ],
            fam: [ // family structure
                'Single',
                'Partnered',
                'Person <18 y/o present'
            ],
            gen: [ // gender
                'Female',
                'Male'
            ],
            soc: [ // socioeconomic status
                'Low',
                'Moderate',
                'Upper'
            ],
            bui: [ // built environment
                'New rural',
                'Old rural',
                'New urban',
                'Old urban'
            ]
        }
    },
    data: {}
};
counties.data.FL.forEach(function(item){
    sedFL.data[item[1]] = functions.readSED(item[1], csv2, csv3);
});

// apply SED factors
var sedfactFL = {
    metadata: {
        County: {
            age: ['inj', 'fat', 'pts'],
            eth: ['inj', 'fat', 'pts'],
            fam: ['inj', 'fat', 'pts'],
            gen: ['inj', 'fat', 'pts'],
            soc: ['inj', 'fat', 'pts'],
            bui: ['inj', 'fat', 'pts']
        }
    },
    data: {}
};
counties.data.FL.forEach(function(item){
    sedfactFL.data[item[1]] = functions.applySED(item[1], sedFL);
});

var sedfactFL_ = {
    metadata: {
        age: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        },
        eth: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        },
        fam: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        },
        gen: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        },
        soc: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        },
        bui: {
            inj: [['fips', 'factor'], ['...']],
            fat: [['fips', 'factor'], ['...']],
            pts: [['fips', 'factor'], ['...']]
        }
    },
    data: {
        age: {
            inj: [],
            fat: [],
            pts: []
        },
        eth: {
            inj: [],
            fat: [],
            pts: []
        },
        fam: {
            inj: [],
            fat: [],
            pts: []
        },
        gen: {
            inj: [],
            fat: [],
            pts: []
        },
        soc: {
            inj: [],
            fat: [],
            pts: []
        },
        bui: {
            inj: [],
            fat: [],
            pts: []
        }
    }
};

var sedbinFL = {
    metadata: {
        age: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        },
        eth: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        },
        fam: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        },
        gen: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        },
        soc: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        },
        bui: {
            inj: [['fips', '10%'], ['...']],
            fat: [['fips', '10%'], ['...']],
            pts: [['fips', '10%'], ['...']]
        }
    },
    data: {
        age: {
            inj: [],
            fat: [],
            pts: []
        },
        eth: {
            inj: [],
            fat: [],
            pts: []
        },
        fam: {
            inj: [],
            fat: [],
            pts: []
        },
        gen: {
            inj: [],
            fat: [],
            pts: []
        },
        soc: {
            inj: [],
            fat: [],
            pts: []
        },
        bui: {
            inj: [],
            fat: [],
            pts: []
        }
    }
};
counties.data.FL.forEach(function(item){
    functions.mapSED(item[1], sedfactFL, sedfactFL_.data, sedbinFL.data);
});

// assign coordinates
var coordFL = {
    metadata: [
        'County',
        'FIPS code',
        'Latitude',
        'Longitude'
    ],
    data: []
};
counties.data.FL.forEach(function(item, index){
    functions.matchCoordFL(item, index, coordFL.data);
});