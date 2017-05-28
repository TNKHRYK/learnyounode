var url = process.argv[2].toString();

var http = require('http');
var out = "";

http.get(url,function(res){

    res.setEncoding("utf8");

    res.on("data", function (data) {
        //console.log(data);
        out += data;
    });


    res.on("end",function(){
        console.log(out.length);
        console.log(out);
    });

    res.on("error",function(error){
        console.error("ERROR : " + error.message);
    })

})



//console.log(http.get(url));
