const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const auth = require('./dist/API/routes/auth');

app.use( express.static(__dirname) );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('trust proxy', 1);

//API ROUTES

app.use('/auth',auth);

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('server started on ' + port);