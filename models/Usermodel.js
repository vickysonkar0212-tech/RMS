// const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,

//   },
//   Username: {
//     type: String,
//     required:true

//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//   },
//    avatar: {
//     type: String,
//     default: "",
//   },
// },
// {
//   timestamps :true,
// }
// );


// const UserModel = mongoose.model('User', userSchema);
// module.exports = UserModel;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false // Don't include in queries by default
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'faculty'],
    default: 'student'
  },
  avatar: {
    type: String,
    default: ''
  },
  googleId: {
    type: String
  },
  // Password reset
  resetPasswordToken: String,
  resetPasswordExpire: Date
}, {
  timestamps: true
});

// Index for unique email
userSchema.index({ email: 1 });

// Hash password before save
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
