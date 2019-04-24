var functions = {};

functions.readHazus = function(states, counties, speeds, counts){
    var data = {};
    var data_ = {};
    var tracts = {};
    states.forEach(function(state){
        if(data[state[0]] == null){
            data[state[0]] = {};
            data_[state[0]] = {};
            tracts[state[0]] = {};
        }
        counties[state[0]].forEach(function(county){
            if(data[state[0]][county[0]] == null){
                data[state[0]][county[0]] = [0, 0, 0, 0, 0, 0, 0];
                data_[state[0]][county[0]] = {};
                tracts[state[0]][county[0]] = [];
            }
        });
    });
    speeds = speeds.split('\n');
    states.forEach(function(state){
        counties[state[0]].forEach(function(county){
            speeds.forEach(function(item){
                item = item.split(',');
                var fips = county[1].split('');
                var fips_ = item[0].split('');
                var res = item[0];
                if(fips_.length == 10){
                    fips_ = ['0'].concat(fips_);
                    res = '0' + res;
                }
                if(fips[0] == fips_[0]){
                    if(fips[1] == fips_[1]){
                        if(fips[2] == fips_[2]){
                            if(fips[3] == fips_[3]){
                                if(fips[4] == fips_[4]){
                                    tracts[state[0]][county[0]].push(res);
                                    data_[state[0]][county[0]][res] = [];
                                    data_[state[0]][county[0]][res].push(
                                        Number(item[1])
                                    );
                                }
                            }
                        }
                    }
                }
            });
        });
    });
    counts = counts.split('\n');
    states.forEach(function(state){
        counties[state[0]].forEach(function(county){
            counts.forEach(function(item){
                item = item.split(',');
                var fips = county[1].split('');
                var fips_ = item[0].split('');
                var res = item[0];
                if(fips_.length == 10){
                    fips_ = ['0'].concat(fips_);
                    res = '0' + res;
                }
                if(fips[0] == fips_[0]){
                    if(fips[1] == fips_[1]){
                        if(fips[2] == fips_[2]){
                            if(fips[3] == fips_[3]){
                                if(fips[4] == fips_[4]){
                                    if(data_[state[0]][county[0]][res] != null){
                                        data_[state[0]][county[0]][res].push(
                                            Number(item[1]),
                                            Number(item[2]),
                                            Number(item[3]),
                                            Number(item[5]),
                                            Number(item[7]),
                                            Number(item[9])
                                        );
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
    });
    states.forEach(function(state){
        counties[state[0]].forEach(function(county){
            var res = tracts[state[0]][county[0]].length;
            tracts[state[0]][county[0]].forEach(function(item){
                data[state[0]][county[0]][0] += Math.round(data_[state[0]][county[0]][item][0]/res);
                data[state[0]][county[0]][1] += data_[state[0]][county[0]][item][1];
                data[state[0]][county[0]][2] += data_[state[0]][county[0]][item][2];
                data[state[0]][county[0]][3] += data_[state[0]][county[0]][item][3];
                data[state[0]][county[0]][4] += data_[state[0]][county[0]][item][4];
                data[state[0]][county[0]][5] += data_[state[0]][county[0]][item][5];
                data[state[0]][county[0]][6] += data_[state[0]][county[0]][item][6];
            }
            );
            // result in %%
            data[state[0]][county[0]][2] = Math.round(1000*data[state[0]][county[0]][2]/data[state[0]][county[0]][1]);
            data[state[0]][county[0]][3] = Math.round(1000*data[state[0]][county[0]][3]/data[state[0]][county[0]][1]);
            data[state[0]][county[0]][4] = Math.round(1000*data[state[0]][county[0]][4]/data[state[0]][county[0]][1]);
            data[state[0]][county[0]][5] = Math.round(1000*data[state[0]][county[0]][5]/data[state[0]][county[0]][1]);
            data[state[0]][county[0]][6] = Math.round(1000*data[state[0]][county[0]][6]/data[state[0]][county[0]][1]);
            // result in count
            // data[state[0]][county[0]][2] = Math.round(data[state[0]][county[0]][2]);
            // data[state[0]][county[0]][3] = Math.round(data[state[0]][county[0]][3]);
            // data[state[0]][county[0]][4] = Math.round(data[state[0]][county[0]][4]);
            // data[state[0]][county[0]][5] = Math.round(data[state[0]][county[0]][5]);
            // data[state[0]][county[0]][6] = Math.round(data[state[0]][county[0]][6]);
        });
    });
    return data;
};

functions.readFEMA = function(states, counties, csv){
    var data = {};
    states.forEach(function(state){
        if(data[state[0]] == null){
            data[state[0]] = {};
        }
        counties[state[0]].forEach(function(county){
            if(data[state[0]][county[0]] == null){
                data[state[0]][county[0]] = [];
            }
        });
    });
    csv = csv.split('\n');
    csv.forEach(function(item, index){
        item = item.replace(/[.#!$%\^&\*;:{}=\-_`~()]/g, '');
        item = item.replace(/\s+/g, '');
        item = item.split(',');
        if(index>2 && index<csv.length-1){
            if(item[1] != 'TOTAL'){
                data[item[1]][item[0]].push(
                    'NA',
                    Number(item[7]),
                    // result in %%
                    Math.round(1000*(Number(item[7]) - Number(item[6]))/Number(item[7])),
                    Math.round(1000*Number(item[2])/Number(item[7])),
                    Math.round(1000*Number(item[3])/Number(item[7])),
                    Math.round(1000*Number(item[4])/Number(item[7])),
                    Math.round(1000*Number(item[5])/Number(item[7]))
                    // result in count
                    // Number(item[7]) - Number(item[6]),
                    // Number(item[2]),
                    // Number(item[3]),
                    // Number(item[4]),
                    // Number(item[5])
                );
            }
        };
    });
    return data;
};

functions.compare = function(states, counties, hazus, fema){
    var data = {};
    states.forEach(function(state){
        if(data[state[0]] == null){
            data[state[0]] = {};
        }
        counties[state[0]].forEach(function(county){
            if(data[state[0]][county[0]] == null){
                data[state[0]][county[0]] = [
                    hazus[state[0]][county[0]][0],
                    // result in %
                    Math.ceil(100*(hazus[state[0]][county[0]][1] - fema[state[0]][county[0]][1])/(fema[state[0]][county[0]][1] + 1)),
                    Math.ceil(100*(hazus[state[0]][county[0]][2] - fema[state[0]][county[0]][2])/(fema[state[0]][county[0]][2] + 1)),
                    Math.ceil(100*(hazus[state[0]][county[0]][3] - fema[state[0]][county[0]][3])/(fema[state[0]][county[0]][3] + 1)),
                    Math.ceil(100*(hazus[state[0]][county[0]][4] - fema[state[0]][county[0]][4])/(fema[state[0]][county[0]][4] + 1)),
                    Math.ceil(100*(hazus[state[0]][county[0]][5] - fema[state[0]][county[0]][5])/(fema[state[0]][county[0]][5] + 1)),
                    Math.ceil(100*(hazus[state[0]][county[0]][6] - fema[state[0]][county[0]][6])/(fema[state[0]][county[0]][6] + 1)),
                ];
            }
        });
    });
    return data;
};

functions.matchCoord = function(states, counties, hazus, fema, hurricane, data){
    var coord = {
        metadata: {
            State: {
                County: [
                    'Latitude',
                    'Longitude'
                ]
            }
        },
        data: {
            Texas: {
                Aransas: [28.0761, -96.9639],
                Brazoria: [29.2132, -95.4778],
                Calhoun: [28.4169, -96.6638],
                Chambers: [29.7525, -94.6864],
                DeWitt: [29.1235, -97.3517],
                FortBend: [29.5693, -95.8143],
                Galveston: [29.3763, -94.8521],
                Harris: [29.7752, -95.3103],
                Jackson: [28.9341, -96.5356],
                Jefferson: [29.8165, -94.1514],
                Lavaca: [29.3359, -96.8351],
                Liberty: [30.1634, -94.8106],
                Matagorda: [28.8205, -95.9833],
                Montgomery: [30.3213, -95.4778],
                Nueces: [27.7693, -97.4814],
                Refugio: [28.3465, -97.1359],
                SanPatricio: [28.0000, -97.5247],
                Victoria: [28.7713, -97.0068],
                Walker: [30.6815, -95.6458]
            },
            SouthCarolina: {
                Beaufort: [32.4316, -80.6698],
                Berkeley: [33.1261, -80.0088],
                Charleston: [32.7765, -79.9311],
                Colleton: [32.8242, -80.7214],
                Dorchester: [33.1680, -80.5438],
                Jasper: [32.4914, -81.0755]
            },
            Georgia: {
                Bryan: [32.0237, -81.4718],
                Camden: [30.8983, -81.6035],
                Chatham: [31.9994, -81.1196],
                Glynn: [31.2624, -81.6035],
                Liberty: [31.8430, -81.4718],
                McIntosh: [31.4748, -81.3839]
            },
            Florida: {
                Charlotte: [26.8946, -81.9098],
                Clay: [29.9944, -81.7787],
                Collier: [26.0700, -81.4279],
                Duval: [30.3501, -81.6035],
                Hillsborough: [27.9904, -82.3018],
                Lee: [26.6630, -81.9535],
                Manatee: [27.4799, -82.3452],
                MiamiDade: [25.5516, -80.6327],
                Monroe: [24.5557, -81.7826],
                Nassau: [30.5927, -81.8224],
                Pinellas: [27.8764, -82.7779],
                Putnam: [29.6265, -81.7787],
                Sarasota: [27.1996, -82.3452],
                StJohns: [29.9719, -81.4279]
            },
            Alabama: {
                Mobile: [30.6082, -88.2461],
                Baldwin: [30.6011, -87.7763]
            },
            Mississippi: {
                Hancock: [30.3888, -89.5120],
                Harrison: [30.4321, -89.0179],
                Jackson: [30.4278, -88.5565]
            }
        }
    };
    states.forEach(function(state){
        counties[state[0]].forEach(function(county){
            if(fema[state[0]][county[0]][1]>0){
                var cat = 'NA';
                if(hazus[state[0]][county[0]][0]>=74){
                    cat = 'Category I';
                    if(hazus[state[0]][county[0]][0]>=96){
                        cat = 'Category II';
                        if(hazus[state[0]][county[0]][0]>=111){
                            cat = 'Category III';
                            if(hazus[state[0]][county[0]][0]>=130){
                                cat = 'Category IV';
                                if(hazus[state[0]][county[0]][0]>=157){
                                    cat = 'Category V';
                                }
                            }
                        }
                    }
                }
                data.push([[
                    // about location
                    state[0],
                    county[0],
                    fema[state[0]][county[0]][1],
                    coord.data[state[0]][county[0]][0],
                    coord.data[state[0]][county[0]][1]
                ],
                [
                    // about hazard
                    hurricane,
                    hazus[state[0]][county[0]][0],
                    cat
                ],
                [
                    // from Hazus, estimated, due to wind
                    hazus[state[0]][county[0]][3],
                    hazus[state[0]][county[0]][4],
                    hazus[state[0]][county[0]][5],
                    hazus[state[0]][county[0]][6],
                    hazus[state[0]][county[0]][3] + hazus[state[0]][county[0]][4] + hazus[state[0]][county[0]][5] + hazus[state[0]][county[0]][6]
                ],
                [
                    // from FEMA, actual, due to surge
                    fema[state[0]][county[0]][3],
                    fema[state[0]][county[0]][4],
                    fema[state[0]][county[0]][5],
                    fema[state[0]][county[0]][6],
                    fema[state[0]][county[0]][3] + fema[state[0]][county[0]][4] + fema[state[0]][county[0]][5] + fema[state[0]][county[0]][6]
                ],
                [
                    // -: FEMA (surge) greater
                    // +: Hazus (wind) greater
                    fema[state[0]][county[0]][3] - hazus[state[0]][county[0]][3],
                    fema[state[0]][county[0]][4] - hazus[state[0]][county[0]][4],
                    fema[state[0]][county[0]][5] - hazus[state[0]][county[0]][5],
                    fema[state[0]][county[0]][6] - hazus[state[0]][county[0]][6],
                    (fema[state[0]][county[0]][3] + fema[state[0]][county[0]][4] + fema[state[0]][county[0]][5] + fema[state[0]][county[0]][6]) - (hazus[state[0]][county[0]][3] + hazus[state[0]][county[0]][4] + hazus[state[0]][county[0]][5] + hazus[state[0]][county[0]][6])
                ]]);
            }
        });
    });
};

// debugging in node
// module.exports = functions;