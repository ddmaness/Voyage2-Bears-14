const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/users.js');

const router = express.Router();

//configure mongoose promises
mongoose.Promise = global.Promise;


// POST method to edit user profile at /profile
router.route('/edit-profile')
  .post((req, res) => {
    // Find user in DB return err if not found
    const query = { _id: req.body.id }
    const profileData = {
        $set: {
        background: req.body.background,
        timezone: req.body.timezone,
        'skills.0': req.body.skills,
        'languages.0': req.body.languages,
        },
    }
    User.updateOne(query, profileData)
    .then(function(result) {
        console.log(JSON.stringify(req.user));
        return res.send(JSON.stringify(req.user));
    });
});

module.exports = router;
