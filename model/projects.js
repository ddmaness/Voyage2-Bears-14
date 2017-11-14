'use strict';

//import dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create new instance of mongoose.schema, providing object as template for db object
const projectSchema = new Schema({
  name: String,
  creator: String,
  creatorName: String,
  description: String,
  startDate: Date,
  endDate: Date,
  teamSize: Number,
  difficultyLevel: String,
  languages: [String],
  skillsRequired: [String],
  featured: Boolean,
  timezone: String,
  team: [String],
  status: String
}, {timestamps: true});

//export our module to use in server.js
module.exports = mongoose.model('Project', projectSchema);