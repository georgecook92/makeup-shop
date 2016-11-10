const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
require('babel-polyfill');

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const auth = require('./dist/API/routes/auth');
const products = require('./dist/API/routes/products');



app.use(express.static(__dirname));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.set('trust proxy', 1);

// API ROUTES
app.use('/api/auth', auth);
app.use('/api/products', products);

app.use(function(err, req, res, next) {
  if (err.message === 'Incorrect Password') {
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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('server started on ' + port);
