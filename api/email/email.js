const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const randomstring = require('randomstring');

export default class Email {

  constructor(recipient, sender, subject, text, res) {
    this.recipient = recipient;
    this.sender = sender;
    this.subject = subject;
    this.text = text;
    this.res = res;
  }

  sendTokenEmail() {
    const token = randomstring.generate({
      length: 20,
      charset: 'hex'
    });
    var options = {
      //need ENV
      auth: {
        api_user: 'Georgecook92',
        api_key: 'osc5Gne^s9tAd25n'
      }
    }
    var mailer = nodemailer.createTransport(sgTransport(options));
    var url = 'tbc(maybe localhost)';
    var mailOptions = {
      to: this.recipient,
      from: this.sender,
      subject: this.subject,
      text: this.text
    };

    //console.log('res from email', this.res);

    //uses node mailer and send-grid
    mailer.sendMail(mailOptions, (err) => {
      if (err) {
        return console.log('err', err);
      }
    //  console.log('res inside', this.res);
      this.res.json( { 'success': 'Email has been sent' } );

    });
  }
}
