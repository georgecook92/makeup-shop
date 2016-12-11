const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
require('babel-polyfill');

const auth = require('./dist/API/routes/auth');
const products = require('./dist/API/routes/products');
const cart = require('./dist/API/routes/cart.js');



// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


// app.set('trust proxy', 1);

// API ROUTES
app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/cart', cart);

app.use(function(err, req, res, next) {
  if (err.message === 'Incorrect Password' || err.message === 'Invalid Token') {
    res.status(401);
  } else if (err.message === 'User Does Not Exist' || err.message === 'ID Not Found') {
    res.status(404);
  } else if (err.message === 'Exists' || err.message === 'Provide All Fields' || err.message === 'No Change') {
    res.status(422);
  } else {
    res.status(500);
  }
  res.end(err.message + '\n');
});

app.listen(port);
console.log('server started on ' + port);
