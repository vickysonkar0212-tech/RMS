const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model("Otp", OtpSchema);
