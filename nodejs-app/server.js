var createError = require('http-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.environment.HOSTNAME + '\n')
});

app.listen(8080,process.environment.HOSTNAME,function () {
  console.log('Example app listening on port 8080!');
});

