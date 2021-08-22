const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 20);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    req.session.error = 'User does not exsist';
    throw new Error('User does not exsist');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    res.status(400);
    req.session.error = 'User credentials Invalid';
    throw new Error('User credentials Invalid');
  }

  req.session.username = user.username;
  res.status(200);
};

exports.test = (req, res) => {
  res.send('done');
};
