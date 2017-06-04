var mongoose = require('mongoose');

var validateQunatity = function(quantity) {
  return quantity !== 0;
}

var cartSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true
  },
  productId: {
    type: Array,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    validate: [validateQunatity, 'Value should no be zero']
  }
});

mongoose.model('Cart', cartSchema);
