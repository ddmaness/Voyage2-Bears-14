//server.js
'use strict'

//enable env variables with dotenv package for dev environment
require('dotenv').config()

//import node_module dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//create express app and router instances
var app = express();
var router = express.Router();

//set port to use environment variable or default to a specific port
var port = process.env.API_PORT || 3001;

//set db credentials for mlab
var dbusername = process.env.DB_USER
var dbpassword = process.env.DB_PASS

//db config
mongoose.connect(`mongodb://${dbusername}:${dbpassword}@ds111565.mlab.com:11565/chinguhackathon`);

//set express server to use body-parser on requests and return JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//borrowed code to prevent CORS errors with requests between API and Client servers
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //and remove cacheing so we get the most recent data
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//set the router entry path and put in canned response (temporary)
router.get('/', function(req, res) {
 res.json({ message: 'Home of the future Chingu Hackathon API!'});
});

//set router to respond to /api requests
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});