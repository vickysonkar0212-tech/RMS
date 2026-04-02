const User = require("../models/Usermodel")
// bcryptjs removed - use bcrypt v5

const { generateToken } = require('../services/jwt');
const Email = require("../helper/Email")
const OTPhandler = require("../helper/OTPhandler")

// Temp OTP storage for register flow (in production use Redis)
const pendingRegs = new Map();

const Register = async (req, res) => {
  try {
    const { name, username, email, password, role = 'student' } = req.body;

    // Check if email exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ 
        success: false, 
        message: "User already exists" 
      });
    }

    // Generate and send OTP, store pending data
    const otpResult = await OTPhandler.Create(email);
    
    pendingRegs.set(email, { name, username, password, role });

    return res.status(200).json({ 
      success: true, 
      message: "6 digit OTP sent to your email", 
      data: { email, expiresAt: otpResult.expiresAt }
    });

  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

const Forgot = async (req, res) => {

    try {

        const { email } = req.body;


        const userExist = await UserModel.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ status: false, message: "User doesn't exist !" })

        }

        return res.status(200).json({ status: true, message: "Forgot successfully" })

    } catch (error) {
        return res.status(500).json({ status: false, error: error.mesaage })
    }
}
const Login = async (req, res) => {
  try {
  const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ 
              success: false, 
              message: "Invalid credentials" 
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ 
              success: false, 
              message: "Invalid credentials" 
            });
        }

        const token = generateToken(user._id, user.role);
        return res.status(200).json({ 
          success: true, 
          message: "Login successful", 
          data: { 
            token, 
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role
            }
          } 
        });

    } catch (error) {
        return res.status(500).json({ status: false, error: error.message })
    }
}


// const checkEmail = async (req, res) => {

//     try {

//         const { email } = req.body;
        
// // function isProperGmail(email) {
// //     const pattern = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,29}@gmail\.com$/;
// //     return pattern.test(email);
// // }
// // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //             if (!regex.test(email)) {
// //                 return false
// // }

// const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|in|edu|gov|co)$/i;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ status: false, message: "Invalid email format" });
//     }


//         const userExist = await UserModel.findOne({ email });

//         if (userExist) {
//             return res.status(400).json({ status: false, message: "Email Already Exist" })

//         }
//         return res.status(200).json({ status: true, message: "Email Exist !" })

//     } catch (error) {
//         return res.status(500).json({ status: false, error: error.mesaage })
//     }
// }

const dns = require("dns").promises;
const validator = require("validator");

const CheckEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // 1. Validate full email format using validator.js
    if (!validator.isEmail(email)) {
      return res.status(400).json({ status: false, message: "Invalid email syntax" });
    }

    // 2. Extract domain from email
    const domain = email.split('@')[1];
 const blockedDomains = [
      'gmail.cm',
      'gmal.com',
      'gnail.com',
      'gmail.comm',
      'yahho.com',
      'outlok.com',
      'hotmial.com',
      'reddif.com'
    ];

    if (blockedDomains.includes(domain)) {
      return res.status(400).json({ status: false, message: "Suspicious or invalid email domain" });
    }
    // 3. Check MX (mail server) records for domain
    try {
      const mx = await dns.resolveMx(domain);
      if (!mx || mx.length === 0) {
        return res.status(400).json({ status: false, message: "Invalid email domain" });
      }
    } catch (err) {
      return res.status(400).json({ status: false, message: "Invalid or non-existent email domain" });
    }

    // 4. Check if email already exists
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ status: false, message: "Email already exists" });
    }

    return res.status(200).json({ status: true, message: "Email is valid and available!" });

  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};


const Verify = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const result = await OTPhandler.verifyOTP(email, otp);

    return res.status(200).json(result);

  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ status: false, message: error.message });
  }
};



const CompleteRegister = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Verify OTP
    const otpResult = await OTPhandler.verifyOTP(email, otp);
    if (!otpResult.success) {
      return res.status(400).json(otpResult);
    }

    // Get pending registration data
    const pendingData = pendingRegs.get(email);
    if (!pendingData) {
      return res.status(400).json({ 
        success: false, 
        message: 'Registration session expired. Please start again.' 
      });
    }

    // Create user (model will hash pw)
    const user = new User({
      name: pendingData.name,
      username: pendingData.username,
      email,
      password: pendingData.password,
      role: pendingData.role
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id, user.role);

    // Cleanup
    pendingRegs.delete(email);

    return res.status(201).json({ 
      success: true, 
      message: 'Registration completed successfully', 
      data: { 
        token, 
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    });

  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

module.exports = {
    Forgot,
    Login,
    CheckEmail,
    Register,
    CompleteRegister,
    Verify
};
