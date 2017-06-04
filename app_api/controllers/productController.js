var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Cart = mongoose.model('Cart');

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

// POST Save Cart by Product Id and Customer Id
module.exports.saveProductInCart = function(req, res, next) {
  var cart = new Cart();
  cart.products = req.body.product;
  cart.customerId = req.body.customerId;
  Cart.find({ customerId: req.body.customerId }, function(err, cartResult) {
    if (!cartResult.length) {
      cart.save(function(err, cartDetails) {
        if (err) {
          res.status(404);
          res.send(err);
        }
        res.json(cartDetails);
      });
    } else {
      var isProductInCart = false,
        indexProduct = 0;
      cartResult[0].products.forEach(function(product, index) {
        if (product.productId === req.body.product.productId) {
          req.body.product.quantity = req.body.product.quantity + product.quantity;
          indexProduct = index;
          isProductInCart = true;
        }
      });
      if (!isProductInCart) {
        Cart.findByIdAndUpdate({ _id: cartResult[0]._id }, { $push: { products: req.body.product } }, function(err, updatedCart) {
          if (err) {
            res.status(404);
            res.send(err);
          }
          res.json(updatedCart);
        });
      } else {
        Cart.findByIdAndUpdate({ _id: cartResult[0]._id }, { $set: { 'products.0.quantity': req.body.product.quantity } }, function(err, updatedCart) {
          if (err) {
            res.status(404);
            res.send(err);
          }
          updatedCart.products[0].quantity = req.body.product.quantity;
          res.json(updatedCart);
        });
      }
    }
  });
}

// GET All Products in Cart by Customer ID

module.exports.getProductsInCart = function(req, res) {
  var products = [];
  Cart.find({ customerId: req.params.customerId }, function(err, cartDetails) {
    if (err) {
      res.status(404);
      res.send(err);
    }
    if (cartDetails[0]) {
      cartDetails[0].products.forEach((product) => {
        products.push(product.productId);
      });
      Product.find({ _id: { $in: products } }, function(err, result) {
        if (err) {
          res.status(404);
          res.send(err);
        }
        res.json(result);
      });
    } else {
      res.status(404);
      res.json({ message: 'Not Found' });
    }
  });
}
