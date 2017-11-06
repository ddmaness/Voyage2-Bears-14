const express = require('express');
const mongoose = require('mongoose');

const Project = require('../model/projects.js');

const router = express.Router();

//configure mongoose promises
mongoose.Promise = global.Promise;

//establish the /api/projects route to our /api router
router.route('/')
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
    //use req.body (via body-parser) to assign model instance values
    let newProject = new Project({
      name: req.body.name,
      creator: req.body.creator,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      teamSize: req.body.teamSize,
      difficultyLevel: req.body.difficultyLevel,
      languages: req.body.languages,
      skillsRequired: req.body.skillsRequired,
      timezone: req.body.timezone,
      team: req.body.team,
      status: 'Recruiting'
    });

    //save configured project instance to DB
    newProject.save(function(err) {
        if (err) throw (err);
            
        res.json({ message: 'Project added' });
    });
});

//establish the /api/projects/:project_id route to our /api router
router.route('/:project_id')
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

//establish the /api/projects/:user_id route to our /api router
router.route('/:role/:user_id')
// get a list of projects related to a specific user (found in URI parameter)
.get( function(req, res) {
  let userId = req.params.user_id;
  let role = req.params.role;

  if (role === 'creator') {
    Project.find({ "creator": userId }, function(err, projects) {
      if (err)
        res.send(err);

      //else return the project
      res.json(projects);
    });
  } else if (role === 'member') {
    Project.find({$and:[{team: userId},{creator:{$ne:userId}}]}, function(err, projects) {
      if (err)
        res.send(err);

      //else return the project
      res.json(projects);
    });
  }
})

module.exports = router;