var express = require('express');
var router = express.Router();
import CartModel from '../model/cartModel.js';

router.get('/getCart', async (req, res, next) => {
  var emailCheckSQL = 'SELECT * FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id where user_id = ?';
  var token = req.get('Authorization') || "";
  var Model = new CartModel(req.body, next, token, emailCheckSQL);
  var cartExist = await Model.checkCartExist();

  if (cartExist.success) {
    console.log("HERE");
    console.log("DATA", cartExist.data);
    res.json(cartExist.data);
  } else {
    var createCartSQL = 'insert into _cart SET user_id=?';
    var CreateCartModel = new CartModel(req.body, next, token, createCartSQL);
    const createdCart = await CreateCartModel.createCart();
    res.json(createdCart);
    console.log("CREATED", createdCart);
  }
});

module.exports = router;
