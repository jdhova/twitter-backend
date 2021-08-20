//import express from 'express';
const express = require('express');
const router = express();
const mongoose = require('mongoose');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

require('dotenv').config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then(() => console.log('DB Connected'));

mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const port = process.env.PORT || 5000;

router.listen(port, () => {
  console.log(`twitter app listning on ${port}`);
});

module.exports = router;
