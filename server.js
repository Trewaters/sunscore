var express = require('express'); // express
var app = express(); // express
var path = require('path');

var models = require('./models/model.js'); // mongoose
var mongoose = require('mongoose'); // mongoose

var meetupEvent = mongoose.model('dataSet1'); // mongoose
var googleEvent = mongoose.model('dataSet2'); // mongoose

//mongoose.connect('mongodb://localhost/sunscore'); // mongoose
mongoose.connect("mongodb://sunscore:SUNSCORE@ds011369.mlab.com:11369/sunscoredb"); // connection string for Mlab

// [NOTE] use fs for writing logs to file
// var fs = require('fs'); // morgan
var logger = require('morgan'); // morgan

// [NOTE] logging format that works well for development
app.use(logger('dev'));  // morgan

// initialize routes
var index = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


/*
// [NOTE] Standard log output
app.use('common');  // morgan
// [NOTE] Minimal output
app.use('tiny');  // morgan

// [NOTE] Write logs to file
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}); // morgan
app.use(morgan('common', {stream: accessLogStream})); // morgan
*/

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}); // express

/*
var passport = require('passport'); // passport
var passport = require('passport-meetup-oauth2'); // passport

// custom success function
app.post('/login',
    passport.authenticate('local'),
    function(req, res){
        // 'req.user' contains the authenticated user
        res.redirect('/users/' + req.user.username);
    }
); // passport

// Local strategy
// built in definitions for success and failure action
app.post('login',
    passport.authenticate('local',
        {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true // flash an error message for the user
        }
    )
); // passport

// Meetup Strategy
var MeetupStrategy = require('passport-meetup-oauth2').Strategy;
passport.use(new MeetupStrategy({
    clientID: config.meetup.KEY,
    clientSecret: config.meetup.SECRET,
    callbackURL: 'http://localhost:3000/auth/meetup/callback'
}, function (accessToken, refreshToken, profile, done) {
    // store credentials, etc
})
); // passport

app.get('/auth/meetup', passport.authenticate('meetup')); // passport

app.get('/auth/meetup/callback',
    passport.authenticate('meetup',
        { failureRedirect: '/login' }),
    function (req, res) {
        // successful authentication, redirect home
        res.redirect('/');
    }); // passport
*/



var server = app.listen({
    host: 'localhost',
    port: 3000
}, function () {
    var vPort = server.address().port;
    var vHost = server.address().address;
    var vIp = server.address().family;

    console.log('listening on ' + vPort + ", as " + vIp + ", IP Address " + vHost);
}); // express