const express = require("express")
const AuthController = require("../controller/AuthController")
const OTPhandler = require("../helper/OTPhandler")


const router = express.Router()

router.post("/checkMail" , AuthController.CheckEmail)
router.post("/register" , AuthController.Register)
router.post("/login" , AuthController.Login)
router.post("/forgot" , AuthController.Forgot)
router.post("/verify" , AuthController.Verify)
// router.post("/generate" , OTPhandler.createotp)

module.exports = router