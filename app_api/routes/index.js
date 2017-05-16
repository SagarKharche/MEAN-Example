var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profileController');
var ctrlAuth = require('../controllers/authenticationController');
var tasks = require('../controllers/tasksController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Task
router.get('/tasks', auth, tasks.getTasks);
router.post('/tasks', auth, tasks.createTask);

module.exports = router;
