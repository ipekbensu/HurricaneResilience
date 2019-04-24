// test in node
// var functions = require('./functions.js');
// var oacsv = require('./pinellas.js');
// var rfcsv = require('./redfin_2019-04-01-16-54-21.js');

function test(data){
    console.log(data.metadata);
    console.log(data.data[0]);
    console.log(data.data.length);
};

var oadata = functions.readData(oacsv); // OpenAddress data
// test(oadata);

var oanest = functions.nestData(oadata); // OpenAddress data
// test
// console.log(oanest[33701]);

var rfdata = functions.readData(rfcsv); // Redfin data
// test(rfdata);

var rfedit = functions.rfcompare(oanest, rfdata); // OpenAddress and Redfin data
// test(rfedit);

functions.analytics(oadata, rfedit);

// functions.rfanalytics(rfedit);

var distrTypes = functions.distrTypes(oadata, rfedit);