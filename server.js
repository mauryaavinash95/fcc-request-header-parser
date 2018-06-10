// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let data = {};
  data.ipaddress = request.headers['x-forwarded-for'].split(",")[0];
  data.language = request.headers['accept-language'];
  data.software = request.headers['user-agent'];
  console.log(request.headers);
  console.log(data);
  response.send(data);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
