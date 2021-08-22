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

  //   const salt = await bcrypt.genSaltSync(10);
  // const password = await req.body.password;

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  // const salt = await bcrypt.genSaltSync(10);
  // const hashedPassword = await req.body.password;

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

exports.signin = (req, res) => {
  res.send('done');
};

// exports.signup = (req, res) => {
//   res.send('done');
// };

exports.test = (req, res) => {
  res.send('done');
};
