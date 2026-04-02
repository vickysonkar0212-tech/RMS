
const OTPModel = require("../models/OtpModel")
const Email = require("../helper/Email")

const Create = async (email) => {
 try {
const otp =  Math.floor(100000 + Math.random() * 900000);
   const userExist = await OTPModel.findOneAndUpdate(
            { email },
           { otp , expiresAt : Date.now() + 10 * 60 * 1000 },
              { upsert: true, new: true, setDefaultsOnInsert: true }
);
 const mail =  await Email(email , "6 digit verification code" , "Your otp is "  +otp )
 console.log(mail)
   return userExist
 } catch (error) {
           return error.message
 }
}

const Verify = async (email , otp) => {
try {
 const userExist = await OTPModel.findOne({ email , otp });
if (!userExist) {
             throw new Error("Invalid OTP" );
            } 
  if (userExist && userExist.expiresAt <= date) {
            return res.status(400).json({ status: false, message: "OTP is expired" })
        }
   return { status: true, message: "OTP verified" };
} catch (error) {
   }
   }

module.exports = {
    Create,
    Verify
}
