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
  products: [{
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      validate: [validateQunatity, 'Qunatity should be greater than zeoro']
    }
  }]
});

mongoose.model('Cart', cartSchema);
