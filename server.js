//Express Server
'use strict'

//enable env variables with dotenv package for dev environment
require('dotenv').config()

//import node_module dependencies
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

//import models and/or routes
const Project = require('./model/projects');
const User = require('./model/users');
const authentication = require('./api/authentication');
const profile = require('./api/profile');
const projects = require('./api/projects');

//create express app and router instances
const app = express();
const router = express.Router();

//set port to use environment variable or default to a specific port
const port = process.env.API_PORT || 3001;

//set db credentials for mlab
const dbusername = process.env.DB_USER
const dbpassword = process.env.DB_PASS

//db config
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbusername}:${dbpassword}@ds111565.mlab.com:11565/chinguhackathon`,{
    keepAlive: true,
    reconnectTries: 30,
    useMongoClient: true
});

//configure express server for logging/parsing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'a random string secret placeholder',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//prevent CORS errors with requests between API and Client servers
app.use( function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //and remove cacheing so we get the most recent data
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//set the router entry path and put in canned response
router.get('/', function(req, res) {
 res.json({ message: 'API Loaded'});
});

//establish the /api/users route for our /api router
router.route('/users')
  .post(function(req, res) {
      let user = new User();

      //use req.body (via body-parser) to assign model instance values
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.background = req.body.background;
      user.skills = req.body.skills;
      user.languages = req.body.languages;
      user.timezone = req.body.timezone;

      //save configured project instance to DB
      user.save(function(err) {
          if (err) 
              res.send(err);

          res.json({ message: 'User added' });
      });
  });

//set router to respond to and route to requests only with /api, react router will route others
app.use('/api', router);
app.use('/api/authentication', authentication);
app.use('/api/profile', profile);
app.use('/api/projects', projects);

//configure Passport authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//possible place for 404 not found error middleware

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});