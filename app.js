require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const passport = require('./config/passport');

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTENDPOINT],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
const auth = require('./routes/auth');
const contacts = require('./routes/contacts');
const financials = require('./routes/financials');
const leases = require('./routes/leases');
const portfolios = require('./routes/portfolios');
const properties = require('./routes/properties');

app.use('/', index);
app.use('/auth', auth);
app.use('/contacts', contacts);
app.use('/financials', financials);
app.use('/leases', leases);
app.use('/portfolios', portfolios);
app.use('/properties', properties);

// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
