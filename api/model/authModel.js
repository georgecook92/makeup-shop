var bcrypt = require('bcrypt');
var pool = require('../../../db/connect.js');
const saltRounds = 10;
const randomstring = require('randomstring');
import Email from '../email/email.js';

export default class AuthModel {

  constructor(sql, data, res, next) {
    this.sql = sql;
    this.data = data;
    this.res = res;
    this.next = next;
  }

  changePassword() {
    pool.getConnection().then(connection => {
      try {
        bcrypt.genSalt(saltRounds, (err, salt) => {
          if (err) {
            throw new Error(err);
          }
          bcrypt.hash(this.data.password, salt, (err, hash) => {
            if (err) {
              throw new Error(err);
            }
            this.data.password = hash;
            return connection.query(this.sql, [this.data.password, this.data.user_id]).then(result => {
              console.log(result);
              if (result.changedRows > 0) {
                connection.connection.release();
                this.res.status(200).json({
                  success: true
                });
              } else {
                connection.connection.release();
                throw new Error('User Does Not Exist');
              }
            });
          });
        });
      } catch (e) {
        console.log(e);
        this.next(e);
      }
    })
    .catch(err => {
      console.log(err);
      this.next(err);
    });
  }

  confirmUser() {
    pool.getConnection().then(connection => {
      return connection.query(this.sql, [this.data.token]).then(result => {
        console.log('result', result);
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
      });
    }).catch(err => {
      console.log(err);
      this.next(err);
    });
  }

  register() {
    var {email, password, first_name, last_name, phone} = this.data;
    var user = {email, password, first_name, last_name, phone};
    var registerToken = randomstring.generate({
      length: 20,
      charset: 'hex'
    });
    user.token = registerToken;
    try {
      if (!email || !password || !first_name || !last_name || !phone) {
        // to do with the node-mysql library
        console.log('error - not all fields');
        throw new Error('Provide All Fields');
      } else {
        pool.getConnection().then(connection => {
          return connection.query(this.sql, [this.data.email]).then(result => {
            if (result.length > 0) {
              throw new Error('Exists');
            } else {
              try {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                  if (err) {
                    throw new Error(err);
                  }
                  bcrypt.hash(this.data.password, salt, (err, hash) => {
                    if (err) {
                      throw new Error(err);
                    }
                    user.password = hash;
                    return pool.getConnection().then(conn => {
                      return conn.query('INSERT INTO _users SET ?', user).then(result => {
                        var url = 'www.testsite.com';
                        var registerEmailContent = 'You are receiving this because you (or someone else) have signed up ' +
                        'to the website.\n\n Please click on the following link, or paste this into your browser to complete' +
                         'the process:\n\n' + url + '/confirmEmail/' + user.token + '\n\n Once you have confirmed your account,' +
                         ' you will be able to login.\n';
                        var email = new Email(this.data.email, 'userconfirmation@makeup.com', 'Confirm Account', registerEmailContent, this.res);
                        email.sendTokenEmail();
                        conn.connection.release();
                      });
                    });
                  }
                  );
                });
              } catch (e) {
                console.log(e);
                this.next(e);
              }
            }
          });
        }).catch(err => {
          console.log(err);
          this.next(err);
        });
      }
    } catch (e) {
      console.log(e);
      this.next(e);
    }
  }

  login() {
    pool.getConnection().then(connection => {
      return connection.query(this.sql, [this.data.email]).then(result => {
        if (result.length > 0) {
          // Load hash from your password DB.
          bcrypt.compare(this.data.password, result[0].password, (err, comparisonValue) => {
            try {
              if (err) {
                connection.connection.release();
                console.log(err);
                throw new Error(err);
              }

              if (comparisonValue) {
                connection.connection.release();
                console.log(result[0]);
                this.res.status(200).json({
                  user_id: result[0].user_id,
                  email: result[0].email,
                  first_name: result[0].first_name,
                  last_name: result[0].last_name,
                  phone: result[0].phone
                });
              } else {
                connection.connection.release();
                throw new Error('Incorrect Password');
              }
            } catch (e) {
              console.log(e);
              this.next(e);
            }
          });
        }
      }).catch(err => {
        console.log(err);
        this.next(err);
      });
    });
  }
}
