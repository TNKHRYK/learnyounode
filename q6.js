var path = process.argv[2].toString();
var type = process.argv[3].toString();

var mymodule = require('./mymodule.js');

mymodule(path,type, function(err,list){

//console.log(list);

  if(err)throw err;



  list.forEach(function(file) {
    console.log(file);
  });

});
