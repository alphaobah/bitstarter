var express = require('express');
var fs = require('fs');
var MAX = 1024;
var buf = new Buffer(MAX);
var filename = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync(filename);
  response.send(buf.toString('utf8',0,buf.length));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
