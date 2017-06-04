var mongoose = require('mongoose');
var Product = mongoose.model('Product');

// POST create product 
module.exports.addProduct = function(req, res, next) {
  var product = new Product();
  product.title = req.body.title;
  product.sellerName = req.body.sellerName;
  product.productPrice = req.body.productPrice;
  product.productStars = req.body.productStars;
  product.productType = req.body.productType;
  product.save(function(err, item) {
    if (err) {
      res.status(404);
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
  });
}

// GET Product By Id
module.exports.getProductById = function(req, res, next) {
  Product.findById({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.status(404);
      res.send(err);
    }
    res.json(product)
  });
}
