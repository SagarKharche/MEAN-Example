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

// POST api/task
module.exports.createTask = function(req, res, next) {
  let task = new Tasks();
  task.title = req.body.title;
  task.isDone = req.body.isDone;
  task.save(task, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};
