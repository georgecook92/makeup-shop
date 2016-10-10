var bcrypt = require('bcrypt');
var pool = require('../../../db/connect.js');
const saltRounds = 10;
import Email from '../email/email.js';

export default class AuthModel {

  constructor(sql, data,res) {
    this.sql = sql;
    this.data = data;
    this.res = res;
  }

  confirmUser() {
    return new Promise( (resolve,reject) => {
      pool.getConnection( (err, connection) => {
        connection.query(this.sql, [this.data.token], (err,result) => {
          if (err) {
            console.log(err);
            reject({
              error: err
            });
            connection.release();
          }
          if (result.affectedRows > 0) {
            resolve({
              success: true
            });

          } else {
            reject({
              error: 'not-exist'
            });

          }
        } )
      } );
    } );
  }

  register() {
    pool.getConnection((err,connection) => {
      connection.query(this.sql, [this.data.email], (err,result) => {
        if (err) {
          console.log(err);
          connection.release();
        }

        if (result.length > 0) {
          connection.release();
          this.res.status(422).json({'error': 'exists'});
        } else {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.data.password, salt, (err, hash) => {
              //console.log(hash);
              this.data.password = hash;

              let {email, password, first_name, last_name, phone} = this.data;

              var user = {email, password, first_name, last_name, phone};

              console.log('user',user);

              if (!email || !password || !first_name || !last_name || !phone) {
                connection.release();
              //  console.log(req.body);
                this.res.status(422).json( { "error" : "please provide all fields"} );
              } else {
                //res.json( { "success" : true} );

                pool.getConnection((err, connection) => {
                  if (err) {
                    console.log(err);
                  }

                  connection.query('INSERT INTO _users SET ?', user, (err, result) => {
                    if (err) {
                      console.log(err);
                      connection.release();
                    } else {
                      let url = 'www.testsite.com';
                      var registerEmailContent = 'You are receiving this because you (or someone else) have signed up to the website.\n\n' + 'Please click on the following link, or paste this into your browser to complete the process:\n\n' + url + '/confirmEmail/' + 'token' + '\n\n' + 'Once you have confirmed your account, you will be able to login.\n';

                      let email = new Email(this.data.email, 'userconfirmation@makeup.com', 'Confirm Account', registerEmailContent, this.res );
                      email.sendTokenEmail();
                      connection.release();
                    }
                  });

                });
              }

            });
          });
        }
      });
    });
  }

  login() {
    pool.getConnection((err,connection) => {
      if (err) {
        console.log(err);
      }
      connection.query(this.sql, [this.data.email], (err,result) => {
        if (err) {
          console.log(err);
          connection.release();
        }

        if (result.length > 0) {
          //do something if email exists

          // Load hash from your password DB.
          bcrypt.compare(this.data.password, result[0].password, (err, comparisonValue) => {
              if (err) {
                console.log(err);
                connection.release();
              }

              if (comparisonValue) {
                console.log('correct.');
                connection.release();
                console.log(result[0]);
                this.res.status(200).json({
                  "email" : result[0].email,
                  "first_name" : result[0].first_name,
                  "last_name" : result[0].last_name,
                  "phone" : result[0].phone
                 });

              } else {
                console.log('wrong.');
                connection.release();
                this.res.status(422).json( {"error": 'Incorrect Password'} );
              }
          });

        } else {
          connection.release();
          this.res.status(422).json( {"error": 'Email Not Registered'} );
        }

      });
    });
  }

}
