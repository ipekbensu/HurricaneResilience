var functions = {};

functions.detail = function(lit, detail){
    var data = [];
    var data_ = {};
    lit.forEach(function(paper){
        if(paper.details[detail] in data_){
            data_[paper.details[detail]] += 1;
        }
        else{
            data_[paper.details[detail]] = 1;
        }
    });
    var res = lit.map(function(paper){
        return paper.details[detail];
    });
    res = [...new Set(res)];
    res = res.sort();
    res.forEach(function(item){
        data.push([
            item,
            data_[item]
        ]);
    });
    return data;
};

functions.detail_ = function(lit, detail){
    var data = [];
    var data_ = {};
    var res = [];
    lit.forEach(function(paper){
        paper.details[detail].forEach(function(item){
            if(item in data_){
                data_[item] += 1;
            }
            else{
                data_[item] = 1;
                res.push(item);
            }
        });
    });
    res = [...new Set(res)];
    res = res.sort();
    res.forEach(function(item){
        data.push([
            item,
            data_[item]
        ]);
    });
    return data;
};

functions.top = function(list, detail, num){
    var data = [];
    var data_ = [];
    list.forEach(function(item){
        data_.push({
            journal: item[0],
            frequency: item[1]
        });
    });
    data_ = data_.sort(function(a, b){
        return b.frequency - a.frequency;
    });
    for(var i=0; i<num; i++){
        data.push([
            data_[i].journal,
            data_[i].frequency
        ]);
    }
    return data;
};

functions.overYears = function(top, lit, detail){
    var data = [];
    var data_ = {};
    top.forEach(function(item){
        data_[item[0]] = {
            2008: 0,
            2009: 0,
            2010: 0,
            2011: 0,
            2012: 0,
            2013: 0,
            2014: 0,
            2015: 0,
            2016: 0,
            2017: 0,
            2018: 0,
            2019: 0
        };
    });
    lit.forEach(function(paper){
        if(paper.details[detail] in data_){
            var res = paper.details.year;
            if(res>=2008 && res<=2019){
                data_[paper.details[detail]][res] += 1;
            }
        }
    });
    top.forEach(function(item, index){
        data.push([
            item[0],
            []
        ]);
        for(var i=2008; i<2020; i++){
            data[index][1].push(
                data_[item[0]][i]
            );
        };
    });
    return data;
};

functions.overYears_ = function(top, lit, detail){
    var data = [];
    var data_ = {};
    top.forEach(function(item){
        data_[item[0]] = {
            2008: 0,
            2009: 0,
            2010: 0,
            2011: 0,
            2012: 0,
            2013: 0,
            2014: 0,
            2015: 0,
            2016: 0,
            2017: 0,
            2018: 0,
            2019: 0
        };
    });
    lit.forEach(function(paper){
        paper.details[detail].forEach(function(item){
            if(item in data_){
                var res = paper.details.year;
                if(res>=2008 && res<=2019){
                    data_[item][res] += 1;
                }
            }
        });
    });
    top.forEach(function(item, index){
        data.push([
            item[0],
            []
        ]);
        for(var i=2008; i<2020; i++){
            data[index][1].push(
                data_[item[0]][i]
            );
        };
    });
    return data;
};

functions.ave = function(lit, detail){
    var ave = 0;
    lit.forEach(function(paper){
        ave += paper.details[detail].length;
    });
    ave /= lit.length;
    ave = Math.ceil(ave);
    return ave;
};

// debugging in node
// module.exports = functions;