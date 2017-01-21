var express = require('express');
var router = express.Router();
var config = require('../db/config.js');
var secret = require('../jwtSecret.js');
var jwt = require('jsonwebtoken');

router.post('/createPayment', (req, res) => {

    const authToken = req.get('Authorization') || "";
    var decoded = jwt.verify(this.token, secret);

    var stripe = require("stripe")(config.stripeSecret);
    const currency = "gbp";
    const { amount, description } = req.body;
    let stripeToken = null;
    stripe.tokens.create({
        card: {
          "number": '4000058260000005',
          "exp_month": 12,
          "exp_year": 2018,
          "cvc": '123'
        }
    }).then( (token) => {
      console.log('created token', token);
      stripeToken = token;
    } ).catch( (error) => {
      console.log('error from creating token', error);
    } )

    const charge = stripe.charges.create({
        amount,
        currency,
        description,
        source: stripeToken
    });

    charge.then( (response) => {
      console.log('response from stripe', response);
      res.json(response);
    } ).catch( (error) => {
      console.log('error from stripe', error);
      res.json(error);
    } );

});

module.exports = router;
