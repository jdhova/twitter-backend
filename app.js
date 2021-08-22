//import express from 'express';
const express = require('express');
const router = express();
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const userRoutes = require('./routes/users');

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

router.set('view engine', 'ejs');
router.use(express.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;

router.use(
  session({
    secret: 'juud',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// Middleware
router.use(express.json());
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

router.use(express.static(__dirname));

// Middleware Routes
router.use('/api', userRoutes);

const port = process.env.PORT || 5000;

router.listen(port, () => {
  console.log(`twitter app listning on ${port}`);
});

module.exports = router;
