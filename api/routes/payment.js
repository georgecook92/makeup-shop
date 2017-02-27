var express = require('express');
var router = express.Router();
var config = require('../db/config.js');
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

import OrderModel from '../model/orderModel';
import CartModel from '../model/cartModel';

const getCartSQL = 'SELECT _product.product_id, _product.product_name, _product.price, _cart_product.quantity, _product.discount  FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id inner join _product on _product.product_id = _cart_product.product_id where user_id = ?';
const insertOrderSQL = 'insert into _order SET ?';
const insertProductSQL = "insert into _order_product (order_id, product_id, quantity) VALUES ?";

router.post('/createPayment', async (req, res, next) => {

    const authToken = req.get('Authorization') || "";
    let totalPrice = 0;
    try {
      const token = jwt.verify(authToken, secret);

      // get cart from table (with prices)

      const cartModel = new CartModel(req.body, next, authToken, getCartSQL);
      const cartResult = await cartModel.getCart();

      cartResult.forEach((r) => {
        totalPrice += (+r.price * +r.quantity)
      });

      var stripe = require("stripe")(config.stripeSecret);
      const currency = "gbp";
      const { description } = req.body;

      stripe.tokens.create({
          card: {
            "number": '4242424242424242',
            "exp_month": 12,
            "exp_year": 2018,
            "cvc": '123'
          }
      }).then( (token) => {
        //console.log('created token', token);
        return stripe.charges.create({
            amount: totalPrice * 100,
            currency,
            description,
            source: token.id
        })
      } ).then( async (response) => {

        const orderModel = new OrderModel({payment_id: response.id, total_price: totalPrice}, next, authToken, insertOrderSQL, cartResult, insertProductSQL);
        const orderResult = await orderModel.addOrder();

        res.json(response);
      } ).catch( (error) => {
        console.log('ERROR', error);
        const code = error.statusCode ? error.statusCode : 400;
        res.status(code).json(error);
      } )
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }

});

module.exports = router;
