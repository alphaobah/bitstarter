var express = require('express');
var fs = require('fs');
var MAX = 1024;
var buf = new Buffer(MAX);
var filename = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync(this.dir + "/" +filename);
  console.log(buf.toString('utf8',0,buf.length);
  response.send(buf.toString('utf8',0,buf.length));

  //response.send('Hello World! 2 ');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
