//import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

//db connect
const db = process.env.db;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('db Connected'));

mongoose.connection.on('error', (err) => {
  console.log(`db connection error: ${err.mess}`);
});

const userRoutes = require('./routes/users');
//const conversationsRoutes = require('./routes/conversations');
//const messagesRoutes = require('./routes/messages');
const tweetRoutes = require('./routes/tweets');

// Middleware Routes

// db connect
// const db = process.env.db;
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })

//   .then(() => console.log('db Connected'));

// mongoose.connection.on('error', (err) => {
//   console.log(`db connection error: ${err.mess}`);
// });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: 'juud',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname));

// Middleware Routes
app.use('/api', userRoutes);
//app.use('/api', conversationsRoutes);
//app.use('/api', messagesRoutes);
app.use('/api', tweetRoutes);

// socket io API

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`twitter app listning on ${port}`);
});

module.exports = app;
