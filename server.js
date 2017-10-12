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

//import models
const Project = require('./model/projects');
const User = require('./model/users')

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

//set the router entry path and put in canned response
router.get('/', function(req, res) {
 res.json({ message: 'API Loaded'});
});

//establish the /api/projects route to our /api router
router.route('/projects')
    //retrieve all projects
    .get(function(req, res) {
        Project.find(function(err, projects) {
        if (err)
            //handle error
            res.send(err);
            //responds with a json object of all projects
            res.json(projects)
        });
    })
    //post new project to MongoDB
    .post(function(req, res) {
        let project = new Project();

        //use req.body (via body-parser) to assign model instance values
        project.name = req.body.name;
        project.creator = req.body.creator;
        project.description = req.body.description;
        project.startDate = req.body.startDate;
        project.endDate = req.body.endDate;
        project.teamSize = req.body.teamSize;
        project.difficultyLevel = req.body.difficultyLevel;
        project.languages = req.body.languages;
        project.skills = req.body.skills;
        project.featured = false;
        project.location = req.body.location;

        //save configured project instance to DB
        project.save(function(err) {
            if (err) 
                res.send(err);
                
            res.json({ message: 'Project added' });
        });
    });

//establish the /api/projects/:project_id route to our /api router
router.route('/projects/:project_id')
    // get a project with a specific id (found in URI parameter)
    .get( function(req, res) {
        Project.findById(req.params.project_id, function(err, project) {
            if (err)
                res.send(err);

            //else return the project
            res.json(project);
        });
    })
    // update a project with a specific id
    .put( function(req, res) {
        let id = req.params.project_id;

        Project.findById(id, function(err, project) {
            //handle error
            if (err)
                res.send(err);

            // render 404 not found response if nothing matches id
            if (!project)
                return res.status(404).json({
                    message: 'Project with id ' + id + ' cannot be found.'
                });

            // else update the project
            project.update(req.body, function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Project updated' });
            });

        });
    })

    //delete a project with a specific id
    .delete( function(req, res) {
        let id = req.params.project_id
        Project.remove({
            _id: id
        }, function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Project deleted' });
        });
    });

//establish the /api/users route for our /api router
router.route('/users')
    //retrieve all users
    .get(function(req, res) {
        User.find(function(err, users) {
        if (err)
            //handle error
            res.send(err);
            //responds with a json object of all users
            res.json(users)
        });
    })
    //post new user to MongoDB
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

//set router to respond to /api requests
app.use('/api', router);

//configure Passport authentication
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//possible place for 404 not found error middleware

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});