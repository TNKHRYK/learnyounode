var url = process.argv[2].toString();

var http = require('http');

http.get(url,function(res){

    res.setEncoding("utf8");

    res.on("data", function (data) {
        console.log(data);
    }).on("error",function(error){
        console.error("ERROR : " + error.message);
    })

})



//console.log(http.get(url));
