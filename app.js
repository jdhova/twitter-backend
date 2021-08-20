//import express from 'express';
const express = require('express');
const router = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');

require('dotenv').config();
const userRoutes = require('./routes/users');

// Middlewares
router.use(express.json());
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: false }));

// Middleware Routes

// db connect
const db = process.env.db;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then(() => console.log('db Connected'));

mongoose.connection.on('error', (err) => {
  console.log(`db connection error: ${err.mess}`);
});

const store = new MongoDBStore({
  uri: db,
  collection: 'dbSessions',
});

router.use(
  session({
    secret: 'juud',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// Middleware Routes
router.use('/api', userRoutes);

router.get('/', (req, res) => {
  req.session.isAuth = true;
  res.send('hello working');
});

const port = process.env.PORT || 5000;

router.listen(port, () => {
  console.log(`twitter app listning on ${port}`);
});

module.exports = router;
