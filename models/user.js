const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Pleasw enter a valid email'];
  },
  password: {
    type: String,
    required:  [true, 'Please enter an password'],,
    minlength:  [8, 'Password must be 8 digit'],,
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
