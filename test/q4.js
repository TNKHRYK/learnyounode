var pass = process.argv[2];
//console.log(pass);
var fs = require('fs');
fs.readFile(pass,callBack);

function charCount(all, target){
    return all.split(target).length-1;
}

function callBack(err, data){

    if(err){
        return console.log(err);
    }

    //console.log(err)
    var str = data.toString();
    console.log(charCount(str,'\n'));
}
