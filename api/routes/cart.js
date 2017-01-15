var express = require('express');
var router = express.Router();
import CartModel from '../model/cartModel.js';

router.get('/getCart', async (req, res, next) => {
  try {
    const emailCheckSQL = 'SELECT * FROM _cart where user_id = ?';
    const token = req.get('Authorization') || "test";
    const Model = new CartModel(req.body, next, token, emailCheckSQL);
    const cartExist = await Model.checkCartExist();

    if (cartExist.length !== 0) {
      const getCartSQL = 'SELECT _product.product_id, _product.product_name, _product.price, _cart_product.quantity, _product.discount  FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id inner join _product on _product.product_id = _cart_product.product_id where user_id = ?';
      var cartModel = new CartModel(req.body, next, token, getCartSQL);
      var result = await cartModel.getCart();
      // will return a success value and data if success == true
      res.json({data: result, cartId: cartExist[0].cart_id});
    } else {
      var createCartSQL = 'insert into _cart SET user_id=?';
      var CreateCartModel = new CartModel(req.body, next, token, createCartSQL);
      const createdCart = await CreateCartModel.createCart();
      res.json([]);
    }
  } catch(e) {
    console.log(e);
  }

});

router.post("/addToCart", async (req, res, next) => {
  try {
    // check if product is already in cart - if so update it - else add it

    const checkSQL = "SELECT * FROM _cart_product where cart_id = ? AND product_id = ?";
    const token = req.get('Authorization') || "";
    const CheckCartModel = new CartModel(req.body, next, token, checkSQL);
    const check = await CheckCartModel.checkCartProduct();
    console.log('check', check);
    let result;

    if (check.length > 0) {
      // total quantity
      //const quantity = check[0].quantity + parseInt(req.body.quantity);
      // update cart
      const addSQL = "UPDATE _cart_product SET quantity = " + parseInt(req.body.quantity) + " where cart_id = ? AND product_id = ?";
      var UpdateCartModel = new CartModel(req.body, next, token, addSQL);
      result = await UpdateCartModel.updateCartProduct();
    } else {
      const addSQL = "INSERT INTO _cart_product SET ?";
      var AddCartModel = new CartModel(req.body, next, token, addSQL);
      result = await AddCartModel.addToCart();
    }

    const cartCheckSQL = 'SELECT * FROM _cart where user_id = ?';
    const Model = new CartModel(req.body, next, token, cartCheckSQL);
    const cartExist = await Model.checkCartExist();
    const getCartSQL = 'SELECT _product.product_id, _product.product_name, _product.price, _cart_product.quantity, _product.discount  FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id inner join _product on _product.product_id = _cart_product.product_id where user_id = ?';
    var cartModel = new CartModel(req.body, next, token, getCartSQL);
    const data = await cartModel.getCart();
    res.json({data: data, cartId: cartExist[0].cart_id});
  } catch(e) {
    console.log(e);
  }
});

router.delete("/deleteFromCart", async (req,res,next) => {
  try {
    const SQL = "DELETE FROM _cart_product where cart_id = ? AND product_id = ?";
    const token = req.get('Authorization') || "";
    const Model = new CartModel(req.body, next, token, SQL);
    const result = await Model.deleteFromCart();
    res.json(result);
  } catch(e) {
    console.log(e);
  }
});

module.exports = router;
