var bcrypt = require('bcrypt');
var pool = require('../db/connect.js');
const saltRounds = 10;
const randomstring = require('randomstring');
import Email from '../email/email.js';
var jwt = require('jsonwebtoken');
var secret = require('../jwtSecret.js');

export default class AuthModel {

  constructor(token, data, res, next, sql = '', secondSQL = '') {
    this.token = token;
    this.sql = sql;
    this.data = data;
    this.res = res;
    this.next = next;
    this.secondSQL = secondSQL;
  }

  hashPassword(password) {
    return new Promise((resolve, reject) =>  {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          }
          resolve(hash);
        });
      });
    })
  }

  comparePassword(password, dbPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, dbPassword, (err, comparisonValue) => {
        if (err) {
          reject(err);
        }
        resolve(comparisonValue);
      });
    });
  }

  async forgotPasswordSetup() {
    try {
      const connection = await pool.getConnection();
      const token = randomstring.generate({
        length: 20,
        charset: 'hex'
      });
      const result = await connection.query(this.sql, [token, this.data.email]);
      if (result.changedRows > 0) {
        connection.connection.release();
        const url = 'www.testsite.com';
        var emailContent = 'You are receiving this because you have requested to reset your password. ' +
        'Please click on the following link, or paste this into your browser to complete' +
         'the process:\n\n' + url + '/resetForgottenPassword/' + token + '\n\n After confirming your password' +
         ' you will be able to login.\n';
        var email = new Email(this.data.email, 'forgotten-password@makeup.com', 'Forgotten Password', emailContent, this.res);
        const emailResponse = await email.sendTokenEmail();
        if (emailResponse) {
          this.res.json({success: 'Email has been sent'});
        }
      } else {
        connection.connection.release();
        throw new Error('User Does Not Exist');
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async changePassword(identifier) {
    try {
      const hash = await this.hashPassword(this.data.password);
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [hash, identifier]);
      if (result.changedRows > 0) {
        // if the identifier was the token - do another query which removes the token
        if (typeof identifier === 'string') {
          const secondResult = await connection.query(this.secondSQL, [identifier]);
          if (secondResult.changedRows > 0) {
            connection.connection.release();
            this.res.status(200).json({
              success: true
            });
          } else {
            connection.connection.release();
            throw new Error('User Does Not Exist');
          }
        } else { // normal change password - send success
          connection.connection.release();
          this.res.status(200).json({
            success: true
          });
        }
      } else {
        connection.connection.release();
        throw new Error('User Does Not Exist');
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async confirmUser() {
    try {
      var connection = await pool.getConnection();
      var result = await connection.query(this.sql, [this.data.token]);
      if (result.changedRows > 0) {
        //  how the mysql library is wrapped - stackoverflow
        connection.connection.release();
        this.res.status(200).json({
          success: true
        });
      } else {
        //  how the mysql library is wrapped - stackoverflow
        connection.connection.release();
        throw new Error('User Does Not Exist');
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async register() {
    try {
      var {email, password, first_name, last_name, phone} = this.data;
      var user = {email, password, first_name, last_name, phone};
      const registerToken = randomstring.generate({
        length: 20,
        charset: 'hex'
      });
      user.token = registerToken;
      const connection = await pool.getConnection();
      const emailCheckResult = await connection.query(this.sql, [this.data.email]);
      if (emailCheckResult.length > 0) {
        connection.connection.release();
        throw new Error('Exists');
      } else {
        console.log('INSERT');
        const hash = await this.hashPassword(this.data.password);
        user.password = hash;
        const insertResult = await connection.query(this.secondSQL, user);
        console.log("insert result", insertResult);
        if (insertResult.affectedRows) {
          this.res.json({"success": true});
        }

        // var url = 'www.testsite.com';
        // var registerEmailContent = 'You are receiving this because you (or someone else) have signed up ' +
        // 'to the website.\n\n Please click on the following link, or paste this into your browser to complete' +
        //  'the process:\n\n' + url + '/confirmEmail/' + user.token + '\n\n Once you have confirmed your account,' +
        //  ' you will be able to login.\n';
        // var Email = new Email(this.data.email, 'userconfirmation@makeup.com', 'Confirm Account', registerEmailContent, this.res);
      //   const emailResponse = await Email.sendTokenEmail();
        // if (emailResponse) {
        //   this.res.json({success: 'Email has been sent'});
        // }
        connection.connection.release();
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  async getUserFromToken() {
    try {
      const decoded = jwt.verify(this.token, secret);
      if (decoded.user_id) {
        const connection = await pool.getConnection();
        const result = await connection.query(this.sql, [decoded.user_id]);
        connection.connection.release();
        this.res.status(200).json({
          user_id: result[0].user_id,
          email: result[0].email,
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          phone: result[0].phone
        });
      } else {
        connection.connection.release();
        this.res.status(401).json({"error": "Invalid Token"});
      }


    } catch(e) {
      console.log(e);
      this.next(e);
    }
  }

  async login() {
    try {
      const connection = await pool.getConnection();
      const result = await connection.query(this.sql, [this.data.email]);

      if (result.length > 0) {
        const user_id = result[0].user_id;
        const match = await this.comparePassword(this.data.password, result[0].password);
        if (match) {
          const token = jwt.sign({user_id}, secret, {
          expiresIn: '6h'
        });

          connection.connection.release();
          this.res.status(200).json({
            user_id: result[0].user_id,
            email: result[0].email,
            first_name: result[0].first_name,
            last_name: result[0].last_name,
            phone: result[0].phone,
            token: token
          });
        } else {
          connection.connection.release();
          throw new Error('Incorrect Password');
        }
      } else {
        connection.connection.release();
        throw new Error('User Does Not Exist');
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

}
