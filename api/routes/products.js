var express = require('express');
var router = express.Router();
import ProductsModel from '../model/productsModel.js';

router.get('/getAllByCat', (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _product where _product.category_id = ?';
  var token = req.get('Authorization') || "";
  var Model = new ProductsModel(req.query, res, next, token, emailCheckSQL);
  Model.getAllByCat();
});

router.get('/getAll', async (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _product';
  var token = req.get('Authorization') || "";
  var Model = new ProductsModel(req.query, res, next, token, emailCheckSQL);
  const result = await Model.getAll();
  res.json(result);
});

router.get('/getProduct', (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _product where _product.product_id = ?';
  var token = req.get('Authorization') || "";
  var Model = new ProductsModel(req.query, res, next, token, emailCheckSQL);
  Model.getProduct();
});

router.put('/changeQuantity', (req, res, next) => {
  var changeQuantitySQL = 'update _product set `quantity` = ? where `product_id` = ?';
  var Model = new ProductsModel(req.body, res, next, changeQuantitySQL);
  Model.changeProductQuantity();
});

router.put('/changeDiscount', (req, res, next) => {
  var changeDiscountSQL = 'update _product set `discount` = ? where `product_id` = ?';
  var Model = new ProductsModel(req.body, res, next, changeDiscountSQL);
  Model.changeDiscount();
});

router.put('/changePrice', (req, res, next) => {
  var changePriceSQL = 'update _product set `price` = ? where `product_id` = ?';
  var Model = new ProductsModel(req.body, res, next, changePriceSQL);
  Model.changePrice();
});

module.exports = router;
