var express = require('express');
var router = express.Router();
import ProductsModel from '../model/productsModel.js';

router.get('/getAllByCat', (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _product where _product.category_id = ?';
  var Model = new ProductsModel(req.query, res, next, emailCheckSQL);
  Model.getAllByCat();
});

router.get('/getProduct', (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _product where _product.product_id = ?';
  var Model = new ProductsModel(req.query, res, next, emailCheckSQL);
  Model.getProduct();
});

router.put('/changeQuantity', (req, res, next) => {
  var changeQuantitySQL = 'update _product set `quantity` = ? where `product_id` = ?';
  var Model = new ProductsModel(req.body, res, next, changeQuantitySQL);
  Model.changeProductQuantity();
});

module.exports = router;
