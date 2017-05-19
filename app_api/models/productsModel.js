var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productStars: {
    type: Number,
    required: true
  }
});

mongoose.model('Product', productSchema);
