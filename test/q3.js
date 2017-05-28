var pass = process.argv[2];
//console.log(pass);
var fs = require('fs');
var buf = fs.readFileSync(pass);
var str = buf.toString();

console.log(charCount(str,'\n'));

function charCount(all, target){
    return all.split(target).length-1;
}
