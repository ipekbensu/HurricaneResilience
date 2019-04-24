var functions = {};

functions.readData = function(csv){ // suitable for OpenAddress or Redfin data
    // define data structure
    var data = {
        metadata: [],
        data: []
    };
    // break csv into rows
    var csvdata = csv.split('\n');
    // loop through each row
    csvdata.forEach(function(row, rowIndex){
        // breaks each row into cells
        if(rowIndex == 0){
            row = row.replace(/\s/g, '_');
        }
        row = row.toUpperCase();
        row = row.split(',');
        // if first row, assign to metadata
        if(rowIndex == 0){
            data.metadata = row;
        }
        // else, assign to data
        else{
            var itemIndex = rowIndex - 1;
            data.data.push({});
            data.metadata.forEach(function(cell, cellIndex){
                data.data[itemIndex][cell] = row[cellIndex];
            });
        }
    });
    return data;
};

functions.nestData = function(oadata){ // suitable for OpenAddress data
    // list and sort unique postcodes
    var postcodes = oadata.data.map(function(item){
        return item.POSTCODE;
    });
    postcodes = [...new Set(postcodes)];
    postcodes = postcodes.sort(function(a, b){
        return a - b;
    });
    // test
    // console.log(postcodes);
    // console.log(postcodes.length);
    // list and sort unique streets
    var streets = oadata.data.map(function(item){
        return item.STREET;
    });
    streets = [...new Set(streets)];
    streets = streets.sort(function(a, b){
        return a - b;
    });
    // test
    // console.log(streets);
    // console.log(streets.length);
    // define data structure
    var nest = [];
    postcodes.forEach(function(postcode){
        nest[postcode] = [];
        streets.forEach(function(street){
            nest[postcode][street] = [];
        });
    });
    // nest addresses
    oadata.data.forEach(function(item){
        nest[item.POSTCODE][item.STREET].push(item);
    });
    return nest;
};

functions.rfcompare = function(oanest, rfdata){ // suitable for OpenAddress and Redfin data
    // define data structure
    var rfedit = {
        metadata: [
            'LON',
            'LAT',
            'NUMBER', // calculated
            'STREET', // calculated
            'UNIT', // undefined
            'CITY', // undefined
            'DISTRICT', // undefined
            'REGION', // undefined
            'POSTCODE',
            'ID', // undefined
            'HASH', // undefined
            'rfMATCH', // calculated
            'rfPROPERTY_TYPE',
            'rfPRICE',
            'rfBEDS',
            'rfBATHS',
            'rfSQUARE_FEET',
            'rfLOT_SIZE',
            'rfYEAR_BUILT',
            'oaLATITUDE', // taken to compare
            'oaLONGITUDE', // taken to compare
            'oaERROR' // calculated
        ],
        data: []
    };
    rfdata.data.forEach(function(item){
        // break down address
        var address = item.ADDRESS.split(' ');
        var number = address[0];
        var street = item.ADDRESS.replace(number, ''); // edit for accuracy
        street = street.trim();
        // check if match
        var match = null;
        var oaLAT = null;
        var oaLON = null;
        var oaERR = null;
        if(oanest[item.ZIP_OR_POSTAL_CODE][street]){
            oanest[item.ZIP_OR_POSTAL_CODE][street].forEach(function(each){
                if(each.NUMBER == number){
                    match = 'YES';
                    oaLAT = each.LAT;
                    oaLON = each.LON;
                    var err1 = 100*(item.LATITUDE - oaLAT)/oaLAT;
                    var err2 = 100*(item.LONGITUDE - oaLON)/oaLON;
                    oaERR = Math.abs((err1 + err2)/2);
                }
            });
        }
        // assign info
        rfedit.data.push({
            LON: item.LONGITUDE,
            LAT: item.LATITUDE,
            NUMBER: number, // calculated
            STREET: street, // calculated
            UNIT: null, // undefined
            CITY: null, // undefined
            DISTRICT: null, // undefined
            REGION: null, // undefined
            POSTCODE: item.ZIP_OR_POSTAL_CODE,
            ID: null, // undefined
            HASH: null, // undefined
            rfMATCH: match, // calculated
            rfPROPERTY_TYPE: item.PROPERTY_TYPE,
            rfPRICE: item.PRICE,
            rfBEDS: item.BEDS,
            rfBATHS: item.BATHS,
            rfSQUARE_FEET: item.SQUARE_FEET,
            rfLOT_SIZE: item.LOT_SIZE,
            rfYEAR_BUILT: item.YEAR_BUILT,
            oaLATITUDE: oaLAT, // taken to compare
            oaLONGITUDE: oaLON, // taken to compare
            oaERROR: oaERR // calculated
        });
    });
    return rfedit;
};

functions.analytics = function(oadata, rfedit){ // suitable for OpenAddress and Redfin data
    // count number of buildings
    var num = oadata.data.length;
    // count number of listings
    var numListed = rfedit.data.length;
    // count number and percentage of matches
    var matched = rfedit.data.filter(function(item){
        if(item.rfMATCH == 'YES'){
            return true;
        }
        else{
            return false;
        }
    });
    var numMatched = matched.length;
    var perMatched = 100*numMatched/numListed;
    // sort errors
    var error = rfedit.data.map(function(item){
        return item.oaERROR;
    });
    error = error.sort(function(a, b){
        return b - a;
    });
    console.log('Buildings: ', num);
    console.log('Listed: ', numListed);
    console.log('Matched: ', numMatched);
    console.log('Matched (%): ', perMatched);
    console.log('Max error (%): ', error[0]);
};

functions.rfanalytics = function(rfedit){
    var types = rfedit.data.map(function(item){
        var point = {
            PROPERTY_TYPE: item.rfPROPERTY_TYPE,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var prices = rfedit.data.map(function(item){
        var point = {
            PRICE: item.rfPRICE,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var beds = rfedit.data.map(function(item){
        var point = {
            BEDS: item.rfBEDS,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var baths = rfedit.data.map(function(item){
        var point = {
            BATHS: item.rfBATHS,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var sqft = rfedit.data.map(function(item){
        var point = {
            SQUARE_FEET: item.rfSQUARE_FEET,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var lotsqft = rfedit.data.map(function(item){
        var point = {
            LOT_SIZE: item.rfLOT_SIZE,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var yearbuilt = rfedit.data.map(function(item){
        var point = {
            YEAR_BUILT: item.rfYEAR_BUILT,
            LONGITUDE: item.LON,
            LATITUTDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    console.log(types);
    console.log(prices);
    console.log(beds);
    console.log(baths);
    console.log(sqft);
    console.log(lotsqft);
    console.log(yearbuilt);
};

functions.distrTypes = function(oadata, rfedit){
    var types = rfedit.data.map(function(item){
        var point = {
            PROPERTY_TYPE: item.rfPROPERTY_TYPE,
            LONGITUDE: item.LON,
            LATITUDE: item.LAT,
            oaMATCH: item.rfMATCH
        };
        return point;
    });
    var uniqueTypes = types.map(function(item){
        return item.PROPERTY_TYPE;
    });
    uniqueTypes = [...new Set(uniqueTypes)];
    // test
    console.log(uniqueTypes);
    var countTypes = {};
    uniqueTypes.forEach(function(type){
        countTypes[type] = 0;
    });
    types.forEach(function(type){
        countTypes[type.PROPERTY_TYPE] += 1;
    });
    // test
    // console.log(countTypes);
    var distrTypes = [];
    var onePer = [];
    for(var i=0; i<Math.floor(0.01*oadata.data.length); i++){ // OpenAddress data
        var index = Math.floor(Math.random()*oadata.data.length);
        var point = {
            LAT: oadata.data[index].LAT,
            LON: oadata.data[index].LON
        };
        onePer.push(point);
    };
    // test
    // console.log(onePer);
    onePer.forEach(function(item){
        var rfdist = [];
        types.forEach(function(type){
            var dist1 = Number(type.LONGITUDE) - Number(item.LON);
            var dist2 = Number(type.LATITUDE) - Number(item.LAT);
            var dist = Math.sqrt(dist1*dist1 + dist2*dist2);
            rfdist.push({
                type: type,
                dist: dist
            });
        });
        rfdist = rfdist.sort(function(a, b){
            return a.dist - b.dist;
        });
        // var rfclosest = rfdist[0];
        var rftype = rfdist[0].type.PROPERTY_TYPE;
        distrTypes.push({
            // rfDIST: rfdist,
            // rfCLOSEST: rfclosest,
            rfPROPERTY_TYPE: rftype,
            LON: item.LON,
            LAT: item.LAT
        });
    });
    // test
    // console.log(distrTypes);
    return distrTypes;
};

// test in node
// module.exports = functions;