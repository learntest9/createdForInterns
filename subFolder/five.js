

var http = require('http');

var dt = require('./four');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write("The date and time are currently: " + dt.myDateTime());

  dt.myFUNC1();
  dt.myFUNC2();
  console.log(dt.myValue);

  res.end();

}).listen(8080);


