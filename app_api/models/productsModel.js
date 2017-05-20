var mongoose = require('mongoose');
var productDetails = require('../constant/strings');

var validateProductType = function(productType) {
  var flag = false;
  productDetails.productTypes.forEach(function(product) {
    if (product.value === productType) {
      flag = true;
    }
  });
  return flag;
}

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
  },
  productType: {
    type: String,
    required: true,
    validate: [validateProductType, 'Product type is not found']
  }
});

mongoose.model('Product', productSchema);
