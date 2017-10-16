'use strict';

//import dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//create new instance of mongoose.schema, providing object as template for db object
const userSchema = new Schema({
 firstName: String,
 lastName: String,
 username: String,
 email: String,
 background: String,
 skills: [String],
 languages: [String],
 isAdmin: {type: Boolean, default: false},
 timezone: String
}, {timestamps: true});

//add plugin to provide PassportLocalMongoose module methods to userSchema
userSchema.plugin(passportLocalMongoose);

//export our module to use in server.js
module.exports = mongoose.model('User', userSchema);