var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  isDone: Boolean
});

mongoose.model('Tasks', taskSchema);
