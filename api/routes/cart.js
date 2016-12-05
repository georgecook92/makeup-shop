var express = require('express');
var router = express.Router();
import CartModel from '../model/cartModel.js';

router.get('/getCart', async (req, res, next) => {
  try {
    const emailCheckSQL = 'SELECT * FROM _cart where user_id = ?';
    const token = req.get('Authorization') || "";
    const Model = new CartModel(req.body, next, token, emailCheckSQL);
    const cartExist = await Model.checkCartExist();
    console.log("cart exist", cartExist);

    if (cartExist.success) {
      console.log("SUCCESS");
      const getCartSQL = 'SELECT * FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id where user_id = ?';
      var cartModel = new CartModel(req.body, next, token, getCartSQL);
      var result = await cartModel.getCart();
      console.log("RESULT", result);
      // will return a success value and data if success == true
      res.json(result);
    } else {
      var createCartSQL = 'insert into _cart SET user_id=?';
      var CreateCartModel = new CartModel(req.body, next, token, createCartSQL);
      const createdCart = await CreateCartModel.createCart();
      res.json({"success": false});
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
    var result = null;

    if (check.length > 0) {
      // update cart
      const addSQL = "UPDATE _cart_product SET quantity = ? where cart_id = ? AND product_id = ?";
      var UpdateCartModel = new CartModel(req.body, next, token, addSQL);
      result = await UpdateCartModel.updateCartProduct();
    } else {
      const addSQL = "INSERT INTO _cart_product SET ?";
      var AddCartModel = new CartModel(req.body, next, token, addSQL);
      result = await AddCartModel.addToCart();
    }

    res.json(result);
  } catch(e) {
    console.log(e);
  }
});

router.post("/deleteFromCart", async (req,res,next) => {
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
