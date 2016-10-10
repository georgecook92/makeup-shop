var express = require('express');
var router = express.Router();
var mysql = require('mysql');


import AuthModel from '../model/authModel.js';



var RateLimit = require('express-rate-limit');

var createAccountLimiter = new RateLimit({
  windowMs: 5*60*1000, // 5 minute window
  delayAfter: 3, // begin slowing down responses after the first request
  delayMs: 3*1000, // slow down subsequent responses by 3 seconds per request
  max: 5, // start blocking after 5 requests
  message: "Too many attempts from this IP, please try again in five minutes",
  handler: (req,res) => {
    res.json({ 'error': 'Too many attempts from this IP, please try again in five minutes' });
  }
});

//TODO:

//send email out on registration - spam control - CHANGE SEND GRID *************************

//forgot password
//change password (try and make this work for both (ie above as well))

router.post('/login', createAccountLimiter, (req,res,next) => {
  var emailCheckSQL = 'select * from `_users` where `email` = ?';
  var Model = new AuthModel(emailCheckSQL, req.body, res);
  Model.login();
});

router.post('/register', createAccountLimiter, (req,res,next) => {
  var emailCheckSQL = 'select * from `_users` where `email` = ?';
  var Model = new AuthModel(emailCheckSQL, req.body, res);
  Model.register();
});

router.post('/confirmUser', createAccountLimiter, (req,res,next) => {
  let updateConfirmUserSQL = 'update _users set `verified` = 1, `token` = NULL where `token` = ?' ;
  var Model = new AuthModel(updateConfirmUserSQL, req.body, res);
  Model.confirmUser().then( (result) => {
    console.log('result.success from promise',result.success);
    if (result) {
      res.status(200).json({
        "success": true
      });
    }
  } ).catch( (err) => {
    console.log('error',err.error);
    if (err.error === 'not-exist') {
      console.log('NOT EXIST');
      res.status(404).json({
        "error": err.error
      });
    } else {
      res.status(500).json({
        "error": err.error
      });
    }
  } )
});

router.post('/changePassword', (req,res,next) => {

});



module.exports = router;
