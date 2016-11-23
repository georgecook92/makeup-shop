var express = require('express');
var router = express.Router();
import CartModel from '../model/cartModel.js';

router.get('/getCart', async (req, res, next) => {
  try {
    var emailCheckSQL = 'SELECT * FROM _cart where user_id = ?';
    var token = req.get('Authorization') || "";
    var Model = new CartModel(req.body, next, token, emailCheckSQL);
    var cartExist = await Model.checkCartExist();
    console.log("cart exist", cartExist);

    if (cartExist.success) {
      const getCartSQL = 'SELECT * FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id where user_id = ?';
      var cartModel = new CartModel(req.body, next, token, getCartSQL);
      var result = await cartModel.getCart();
      res.json(result);
    } else {
      var createCartSQL = 'insert into _cart SET user_id=?';
      var CreateCartModel = new CartModel(req.body, next, token, createCartSQL);
      const createdCart = await CreateCartModel.createCart();
      res.json({"success": false});
      console.log("CREATED", createdCart);
    }
  } catch(e) {
    console.log(e);
  }

});

module.exports = router;
