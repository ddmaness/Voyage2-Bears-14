const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../model/users.js');

const router = express.Router();

//configure mongoose promises
mongoose.Promise = global.Promise;

// POST method to register user at /register
router.post('/register', (req, res) => {
    //create a user object to save to db, using values from req body (as JSON)
    const newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    // save user to db using Passport register method
    User.register(newUser, req.body.password, (err, user) => {
        // provide error object if error and handle
        if (err) {
            return res.send(JSON.stringify({ error: err }));
        }
        // Otherwise, provide JSON object with newly registered user info
        return res.send(JSON.stringify(user));
    });
});

// POST method to login a user at /login --> try ASYNC AWAIT
router.post('/login', (req, res) => {
    //find user by email submitted in login request
    const query = User.findOne({ email: req.body.email });
    
    query.exec().then( (res) => {
        //if query finds user, set property in response object to match
        req.body.username = res.username;
    })
    .then( () => {
        //handle passport authentication with modified request
        passport.authenticate('local')(req, res, () => {
            //once logged in, respond with user info in JSON
            if (req.user) {
                return res.send(JSON.stringify(req.user));
            }
            //else return/handle error
            return res.send(JSON.stringify({ error: 'Login error' }));
        })
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });
});

// GET method to check for express session for current user
router.get('/checksession', (req, res) => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({}));
});

// GET method to log a user out at /logout
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
  });

module.exports = router;