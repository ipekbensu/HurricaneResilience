var functions = {};

functions.readCounties = function(fips, csv){
    // var data = ['County', 'FIPS code'];
    var data = [];
    csv = csv.split('\n');
    csv.forEach(function(item){
        item = item.split(',');
        if(item[0] == '050' && item[1] == fips){
            data.push([
                item[6],
                fips + item[2]
            ]);
        }
    });
    return data;
};

functions.readSED = function(fips, csv, csv3){
    // var data = {
    //     age: ['chi', 'ado', 'you', 'mid', 'old', 'eld'],
    //     eth: ['whi', 'non'],
    //     fam: ['sin', 'par', 'per'],
    //     gen: ['fem', 'mal'],
    //     soc: ['low', 'mod', 'upp'],
    //     bui: ['ner', 'olr', 'neu', 'olu']
    // };
    var data = {
        age: [],
        eth: [], // ask about %-ages (denominator)
        fam: [], // ask about %-ages (denominators)
        gen: [],
        soc: [], // ask about method, need more data
        bui: [] // ask about method, need more data
    };
    csv = csv.split('\n');
    csv.forEach(function(item){
        item = item.split(',');
        if(item[1] == fips){
            data.age = [
                Number(item[7]) + Number(item[9]), // 0-9 y/o
                Number(item[11]) + Number(item[13]), // 10-19* y/o
                Number(item[15]) + Number(item[17]), // 20*-29 y/o
                Number(item[19]) + Number(item[21]) + Number(item[23]), // 30-44* y/o
                Number(item[25]) + Number(item[27]) + Number(item[29]) + Number(item[31]), // 45*-64* y/o
                Number(item[33]) + Number(item[35]) + Number(item[37]) + Number(item[39]) + Number(item[41]) // 65+
            ];
            data.eth = [
                Number(item[249]), // white, non-Hispanic
                Number(item[247]) - Number(item[249]) // non-white, non-Hispanic
            ];
            data.fam = [
                100*(Number(item[309]) - Number(item[311]))/Number(item[305]), // partnered, no <18 y/o
                100*(Number(item[305]) - Number(item[309]) - Number(item[315]) - Number(item[319]))/Number(item[305]), // single, no <18 y/o
                100*(Number(item[307]))/Number(item[305]) // with <18 y/o
            ];
            data.gen = [
                Number(item[105]), // female
                Number(item[55]) // male
            ];
            // data.soc = [];
        }
    });
    csv3 = csv3.split('\n');
    csv3.forEach(function(item){
        item = item.replace(/"/g, '');
        item = item.replace(/�/g, '');
        item = item.split(',');
        if(item[1] == fips){
            if(item[2] == 0){ // rural
                if(item[3] == 0){ // new
                    data.bui = [100, 0, 0, 0];
                }
                else{ // old
                    data.bui = [0, 100, 0, 0];
                }
            }
            else{ // urban
                if(item[3] == 0){ // new
                    data.bui = [0, 0, 100, 0];
                }
                else{ // old
                    data.bui = [0, 0, 0, 100];
                }
            }
        }
    });
    return data;
};

functions.applySED = function(fips, sed){
    // var data = {
    //     age: ['inj', 'fat', 'pts'],
    //     eth: ['inj', 'fat', 'pts'],
    //     fam: ['inj', 'fat', 'pts'],
    //     gen: ['inj', 'fat', 'pts'],
    //     soc: ['inj', 'fat', 'pts'],
    //     bui: ['inj', 'fat', 'pts']
    // };
    var data = {
        age: [0, 0, 0],
        eth: [0, 0, 0],
        fam: [0, 0, 0],
        gen: [0, 0, 0],
        soc: [0, 0, 0],
        bui: [0, 0, 0]
    };
    var inj = {
        age: [0.8838, 1.5100, 1.0162, 0.6725, 1.6712, 2.7550],
        eth: [0, 0],
        fam: [0, 0, 0],
        gen: [1.7925, 1.0000],
        soc: [3.4850, 1.8500, 1.0000],
        bui: [0.9500, 1.0000, 1.0500, 1.1500]
    };
    var fat = {
        age: [0.8838, 1.5100, 1.0162, 0.6725, 1.6712, 2.7550],
        eth: [0, 0],
        fam: [0, 0, 0],
        gen: [2.0033, 1.0000],
        soc: [3.4850, 1.8500, 1.0000],
        bui: [0.9000, 1.0000, 1.0000, 1.0000]
    };
    var pts = {
        age: [1.2188, 1.2188, 0.9379, 0.9451, 0.9291, 1.3031],
        eth: [1.0000, 1.4718],
        fam: [2.0000, 1.0000, 2.7065],
        gen: [2.0486, 1.0000],
        soc: [1.9403, 1.2189, 0.9127],
        bui: [1.1000, 1.3000, 1.0000, 1.2000]
    };
    apply = function(fact){
        for(var i=0; i<sed.data[fips][fact].length; i++){
            data[fact][0] += sed.data[fips][fact][i]*inj[fact][i]/100;
            data[fact][1] += sed.data[fips][fact][i]*fat[fact][i]/100;
            data[fact][2] += sed.data[fips][fact][i]*pts[fact][i]/100;
        };     
    };
    apply('age');
    apply('eth');
    apply('fam');
    apply('gen');
    apply('soc');
    apply('bui');
    return data;
};

functions.mapSED = function(fips, sed, data, bins){
    bin = function(val){
        if(val>0){
            var bin = 10*Math.ceil(10*(val-1));
            return bin;
        }
        else{
            return 0;
        }
    };
    apply = function(fact){
        data[fact].inj.push([
            fips,
            sed.data[fips][fact][0]
        ]);
        data[fact].fat.push([
            fips,
            sed.data[fips][fact][1]
        ]);
        data[fact].pts.push([
            fips,
            sed.data[fips][fact][2]
        ]);
        bins[fact].inj.push([
            fips,
            bin(sed.data[fips][fact][0])
        ]);
        bins[fact].fat.push([
            fips,
            bin(sed.data[fips][fact][1])
        ]);
        bins[fact].pts.push([
            fips,
            bin(sed.data[fips][fact][2])
        ]);
    };
    apply('age');
    apply('eth');
    apply('fam');
    apply('gen');
    apply('soc');
    apply('bui');
};

functions.matchCoordFL = function(county, countyIndex, data){
    // data = ['County', 'FIPS code', 'Latitude', 'Longitude'];
    var coordFL_ = [
        '29.6580° N, 82.3018° W',
        '30.3931° N, 82.3018° W',
        '30.1805° N, 85.6846° W',
        '29.9724° N, 82.1714° W',
        '28.2639° N, 80.7214° W',
        '26.1901° N, 80.3659° W',
        '30.3475° N, 85.1894° W',
        '26.8946° N, 81.9098° W',
        '28.8849° N, 82.5186° W',
        '29.9944° N, 81.7787° W',
        '26.0700° N, 81.4279° W',
        '30.1813° N, 82.6051° W',
        '27.2142° N, 81.7787° W',
        '29.5207° N, 83.1649° W',
        '30.3501° N, 81.6035° W',
        '30.6389° N, 87.3414° W',
        '29.4086° N, 81.2519° W',
        '29.7818° N, 84.8568° W',
        '30.5563° N, 84.6479° W',
        '29.6871° N, 82.8210° W',
        '26.9844° N, 81.0755° W',
        '29.8002° N, 85.3550° W',
        '30.4756° N, 82.9502° W',
        '27.4502° N, 81.8224° W',
        '26.6105° N, 81.0755° W',
        '28.5579° N, 82.4753° W',
        '27.3400° N, 81.3400° W',
        '27.9904° N, 82.3018° W',
        '30.8741° N, 85.8077° W',
        '27.6948° N, 80.5438° W',
        '30.7151° N, 85.1894° W',
        '30.4312° N, 83.8897° W',
        '30.0300° N, 83.2078° W',
        '28.7028° N, 81.7787° W',
        '26.6630° N, 81.9535° W',
        '30.4906° N, 84.1857° W',
        '29.3179° N, 82.8210° W',
        '30.1508° N, 84.8568° W',
        '30.4586° N, 83.5070° W',
        '27.4799° N, 82.3452° W',
        '29.2788° N, 82.1278° W',
        '27.0805° N, 80.4104° W',
        '25.5516° N, 80.6327° W',
        '24.5557° N, 81.7826° W',
        '30.5927° N, 81.8224° W',
        '30.5773° N, 86.6611° W',
        '27.3462° N, 80.8987° W',
        '28.4845° N, 81.2519° W',
        '28.1020° N, 81.0755° W',
        '26.6515° N, 80.2767° W',
        '28.3232° N, 82.4319° W',
        '27.8764° N, 82.7779° W',
        '27.8617° N, 81.6912° W',
        '29.6265° N, 81.7787° W',
        '29.9719° N, 81.4279° W',
        '27.3226° N, 80.5438° W',
        '30.7690° N, 86.9824° W',
        '27.1996° N, 82.3452° W',
        '28.7132° N, 81.2078° W',
        '28.6748° N, 82.0843° W',
        '30.2485° N, 82.9932° W',
        '30.0994° N, 83.6774° W',
        '30.0745° N, 82.3452° W',
        '29.0280° N, 81.0755° W',
        '30.1302° N, 84.3542° W',
        '30.5640° N, 86.1752° W',
        '30.5487° N, 85.6846° W'
    ];
    coordFL_.forEach(function(item, index){
        item = item.replace('° N', '');
        item = item.replace('° W', '');
        item = item.split(', ');
        item[1] = '-' + item[1];
        coordFL_[index] = item;
    });
    data.push([
        county[0],
        county[1],
        coordFL_[countyIndex][0],
        coordFL_[countyIndex][1]
    ]);
};

// debugging in node
// module.exports = functions;