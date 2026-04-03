const PaymentController = require('../controller/PaymentController');
const express = require("express")
const router = express.Router()

router.post("/create" , PaymentController.createorder)
router.post("/verify" , PaymentController.verifyorder)
router.get("/getall/:id" , PaymentController.getAllorder)
router.get("/get/:id" , PaymentController.getorder)
router.delete("/delete/:id" , PaymentController.deleteorder)
module.exports = PaymentRoutes = router