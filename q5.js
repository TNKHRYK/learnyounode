var pass = process.argv[2].toString();
var type = "." + process.argv[3].toString();
//console.log(pass);
var fs = require('fs');
var path = require('path');

fs.readdir(pass,callBack);

function charCount(all, target){
    return all.split(target).length-1;
}

function callBack(err, list){

    if(err){
        return console.log(err);
    }

    //console.log(err)
    //var str = list.toString();
    //console.log(list);

    outputFIleName(list);
}

function outputFIleName(files){

//console.log(files);

    files.forEach(function(file){

        //console.log(path.extname(file));

        if(path.extname(file) === type){
            console.log(file);
        }
    })
}
