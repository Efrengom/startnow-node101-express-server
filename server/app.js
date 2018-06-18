// import files and packages up here

const data = require('../server/data.json');
// create your express server below
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.status(200);
    res.send('hello');
});

app.get('/data', function(req, res){
    res.status(200);
    res.json(data);
});

// add your routes and middleware below

// finally export the express application
module.exports = app;
