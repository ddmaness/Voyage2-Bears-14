const express = require('express');
const passport = require('passport');
const User = require('../model/users.js');

const router = express.Router();

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

// POST method to login a user at /login
router.post('/login', (req, res) => {
    passport.authenticate('local')(req, res, () => {
        //once logged in, respond with user info in JSON
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }
        //else return/handle error
        return res.send(JSON.stringify({ error: 'Login error' }));
    });
});

// GET method to log a user out at /logout
router.get('/logout', (req, res) => {
    req.logout();
    return res.send(JSON.stringify(req.user));
  });

module.exports = router;