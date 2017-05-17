var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tasks = mongoose.model('Tasks');


// GET api/tasks
module.exports.getTasks = function(req, res) {
  Tasks.find((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
};

// GET api/tasks/{id}
module.exports.getTaskById = function(req, res) {
  Tasks.findById({ _id: req.params.id }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

// POST api/task
module.exports.createTask = function(req, res, next) {
  let task = new Tasks();
  console.log(task);
  task.title = req.body.title;
  task.isDone = req.body.isDone;
  task.save((err, task) => {
    console.log(task);
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

// DELETE api/task/{id}
module.exports.deleteTask = function(req, res, next) {
  Tasks.remove({ _id: req.params.id }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

// UPDATE api/task/{id}
module.exports.updateTask = function(req, res, next) {
  let task = req.body;
  let updateTask = {};
  if (task.title) {
    updateTask.title = task.title;
  }
  if (task.isDone) {
    updateTask.isDone = task.isDone;
  }
  if (!updateTask) {
    res.status(400);
    res.json({ errorMessage: 'Bad Data' });
  } else {
    Tasks.update({ _id: req.params.id }, updateTask, {}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    })
  }
};
