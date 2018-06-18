var express = require('express');
var app = express();

var morgan = require(morgan)

var data = require('../server/data.json')

app.get('/', function(req, res){
    res.status(200);
}).listen(3000);

app.get('/data', function(req, res){
    res.status(200);
    res.json(data);
}).listen(3000)

