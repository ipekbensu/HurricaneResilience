// debugging in node
// var lit = require('./lit.js');
// var functions = require('./functions.js');

var journals = {
    metadata: [
        'journal', 'frequency'
    ],
    data: []
};
var years = {
    metadata: [
        'year', 'frequency'
    ],
    data: []
};
var depts = {
    metadata: [
        'dept', 'frequency'
    ],
    data: []
};
var keywords = {
    metadata: [
        'keyword', 'frequency'
    ],
    data: []
};

journals.data = functions.detail(lit.data, 'journal');
years.data = functions.detail(lit.data, 'year');
depts.data = functions.detail_(lit.data, 'depts');
keywords.data = functions.detail_(lit.data, 'keywords');

// test
// console.log(journals);
// console.log(years);
// console.log(depts);
// console.log(keywords);

var topJournals = {
    metadata: [
        'journal', 'frequency'
    ],
    data: []
};
var topDepts = {
    metadata: [
        'dept', 'frequency'
    ],
    data: []
};
var topKeywords = {
    metadata: [
        'keyword', 'frequency'
    ],
    data: []
};

topJournals.data = functions.top(journals.data, 'journal', 10);
topDepts.data = functions.top(depts.data, 'dept', 10);
topKeywords.data = functions.top(keywords.data, 'keywords', 10);

// test
// console.log(topJournals);
// console.log(topDepts);
// console.log(topKeywords);

var yearsJournals = {
    metadata: [
        'journal', ['year', '...']
    ],
    data: []
};
var yearsDepts = {
    metadata: [
        'dept', ['year', '...']
    ],
    data: []
};
var yearsKeywords = {
    metadata: [
        'keyword', ['year', '...']
    ],
    data: []
};

yearsJournals.data = functions.overYears(topJournals.data, lit.data, 'journal');
yearsDepts.data = functions.overYears_(topDepts.data, lit.data, 'depts');
yearsKeywords.data = functions.overYears_(topKeywords.data, lit.data, 'keywords');

// test
// console.log(yearsJournals);
// console.log(yearsDepts);
// console.log(yearsKeywords);

var aveDepts = {
    metadata: 'average #',
    data: null
};

var aveKeywords = {
    metadata: 'average #',
    data: null
};

aveDepts.data = functions.ave(lit.data, 'depts');
aveKeywords.data = functions.ave(lit.data, 'keywords');

// test
// console.log(aveDepts);
// console.log(aveKeywords);