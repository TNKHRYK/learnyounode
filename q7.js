var url = process.argv[2].toString();

var http = require('http');

console.log(http.get(url)._events.socket);
