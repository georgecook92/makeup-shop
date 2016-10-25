var express = require('express');
var router = express.Router();
import AuthModel from '../model/authModel.js';

import {createAccountLimiter} from '../general/rateLimit';

// CHANGE SEND GRID *************************

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

router.put('/confirmUser', (req, res, next) => {
  var updateConfirmUserSQL = 'update _users set `verified` = 1, `token` = NULL where `token` = ?';
  var Model = new AuthModel(req.body, res, next, updateConfirmUserSQL);
  Model.confirmUser();
});

router.put('/changePassword', (req, res, next) => {
  if (req.body.user_id) {
    var changePasswordSQL = 'update _users set `password` = ? where `user_id` = ?';
    var Model = new AuthModel(req.body, res, next, changePasswordSQL);
    Model.changePassword(req.body.user_id);
  } else if (req.body.token) {
    var forgotPasswordSQL = 'update _users set `password` = ? where `token` = ?';
    var removeTokenSQL = 'update _users set `token` = NULL where `token` = ?';
    var ForgotModel = new AuthModel(req.body, res, next, forgotPasswordSQL, removeTokenSQL);
    ForgotModel.changePassword(req.body.token);
  }
});

router.put('/forgotPassword', (req, res, next) => {
  var forgottenPasswordSQL = 'update _users set `token` = ? where `email` = ?';
  var Model = new AuthModel(req.body, res, next, forgottenPasswordSQL);
  Model.forgotPasswordSetup();
});

module.exports = router;
