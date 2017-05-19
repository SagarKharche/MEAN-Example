var mongoose = require('mongoose');
var Product = mongoose.model('Product');

// POST create product 
module.exports.addProduct = function(req, res, next) {
  var product = new Product();
  product.title = req.body.title;
  product.sellerName = req.body.sellerName;
  product.productPrice = req.body.productPrice;
  product.productStars = req.body.productStars;
  product.save(function(err, item) {
    if (err) {
      res.send(err);
    }
    res.json(item);
  });
}

// GET ALL PRODUCTS
module.exports.getAllProducts = function(req, res, next) {
  Product.find(function(err, products) {
    if (err) {
      res.send(err);
    }
    res.json(products)
  })
}
