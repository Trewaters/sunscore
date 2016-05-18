var express = require('express'); // express
var app = express(); // express
var path = require('path');

var models = require('./models/model.js'); // mongoose
var mongoose = require('mongoose'); // mongoose

var meetupEvent = mongoose.model('dataSet1'); // mongoose
var googleEvent = mongoose.model('dataSet2'); // mongoose

//mongoose.connect('mongodb://localhost/sunscore'); // mongoose
//mongoose.connect("mongodb://sunscore:SUNSCORE@ds011369.mlab.com:11369/sunscoredb"); // connection string for Mlab

// [NOTE] use fs for writing logs to file
// var fs = require('fs'); // morgan
var logger = require('morgan'); // morgan

// [NOTE] logging format that works well for development
app.use(logger('dev'));  // morgan

/*
// [NOTE] Standard log output
app.use('common');  // morgan
// [NOTE] Minimal output
app.use('tiny');  // morgan

// [NOTE] Write logs to file
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}); // morgan
app.use(morgan('common', {stream: accessLogStream})); // morgan
*/

/*
app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
}); // express
*/

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

var server = app.listen({
    //host: 'localhost',
    port: process.env.PORT || 3000
}, function () {
    var vPort = server.address().port;
    var vHost = server.address().address;
    var vIp = server.address().family;

    console.log('listening on ' + vPort + ", as " + vIp + ", IP Address " + vHost);
}); // express