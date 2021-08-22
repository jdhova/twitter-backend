const mongoose = require('mongoose');
// const crypto = require('crypto');
// const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      //required: true,
      maxlength: 20,
    },
    email: {
      type: String,
      trim: true,
      //required: true,
      unique: true,
    },
    password: {
      type: String,
      //required: true,
    },

    // about: {
    //   type: String,
    // },
  }
  // { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
