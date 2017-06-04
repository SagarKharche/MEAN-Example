var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profileController');
var ctrlAuth = require('../controllers/authenticationController');
var ctrlTasks = require('../controllers/tasksController');
var ctrlProduct = require('../controllers/productController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Task
router.get('/tasks', auth, ctrlTasks.getTasks);
router.post('/task', auth, ctrlTasks.createTask);
router.get('/task/:id', auth, ctrlTasks.getTaskById);
router.delete('/task/:id', auth, ctrlTasks.deleteTask);
router.put('/task/:id', auth, ctrlTasks.updateTask);
// product API
router.post('/product', auth, ctrlProduct.addProduct);
router.get('/products', auth, ctrlProduct.getAllProducts);
router.get('/product/:id', auth, ctrlProduct.getProductById);

module.exports = router;
