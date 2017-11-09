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
        [req.body.targetKey]: req.body[req.body.targetKey],
        },
    }
    User.findOneAndUpdate(query, profileData, {new: true}, function(err, doc) {
        console.log(JSON.stringify(doc));
        return res.send(JSON.stringify(doc));
    });
});

module.exports = router;
