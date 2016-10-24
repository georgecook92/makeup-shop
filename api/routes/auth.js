var express = require('express');
var router = express.Router();
import AuthModel from '../model/authModel.js';

var RateLimit = require('express-rate-limit');

var createAccountLimiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 5 minute window
  delayAfter: 5, // begin slowing down responses after the first request
  delayMs: 3 * 1000, // slow down subsequent responses by 3 seconds per request
  max: 10, // start blocking after 5 requests
  message: "Too many attempts from this IP, please try again in three minutes",
  handler: (req, res) => {
    res.json({error: 'Too many attempts from this IP, please try again in three minutes'});
  }
});

// send email out on registration - spam control - CHANGE SEND GRID *************************

// forgot password
// change password (try and make this work for both (ie above as well))

router.post('/login', createAccountLimiter, (req, res, next) => {
  var emailCheckSQL = 'select * from `_users` where `email` = ?';
  var Model = new AuthModel(req.body, res, next, emailCheckSQL);
  Model.login();
});

router.post('/register', (req, res, next) => {
  var emailCheckSQL = 'select * from `_users` where `email` = ?';
  var Model = new AuthModel(req.body, res, next, emailCheckSQL);
  Model.register();
});

router.post('/confirmUser', (req, res, next) => {
  var updateConfirmUserSQL = 'update _users set `verified` = 1, `token` = NULL where `token` = ?';
  var Model = new AuthModel(req.body, res, next, updateConfirmUserSQL);
  Model.confirmUser();
});

router.post('/changePassword', (req, res, next) => {
  var changePasswordSQL = 'update _users set `password` = ? where `user_id` = ?';
  var Model = new AuthModel(req.body, res, next, changePasswordSQL);
  Model.changePassword();
});

router.post('/forgotPassword', (req, res, next) => {
  var forgottenPasswordSQL = 'update _users set `token` = ? where `email` = ?';
  var Model = new AuthModel(req.body, res, next, forgottenPasswordSQL);
  Model.forgotPasswordSetup();
});

module.exports = router;
