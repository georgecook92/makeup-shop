// const nodemailer = require('nodemailer');
// const sgTransport = require('nodemailer-sendgrid-transport');
//
// export default class Email {
//
//   constructor(recipient, sender, subject, text, res) {
//     this.recipient = recipient;
//     this.sender = sender;
//     this.subject = subject;
//     this.text = text;
//     this.res = res;
//   }
//
//   sendTokenEmail() {
//     return new Promise((resolve, reject) => {
//       var options = {
//         // need ENV
//         auth: {
//           api_user: 'Georgecook92',
//           api_key: 'osc5Gne^s9tAd25n'
//         }
//       };
//       var mailer = nodemailer.createTransport(sgTransport(options));
//       var mailOptions = {
//         to: this.recipient,
//         from: this.sender,
//         subject: this.subject,
//         text: this.text
//       };
//
//       // uses node mailer and send-grid
//       mailer.sendMail(mailOptions, err => {
//         if (err) {
//           console.log('err', err);
//           reject(err);
//         } else {
//           resolve(true);
//         }
//       });
//     });
//   }
// }
