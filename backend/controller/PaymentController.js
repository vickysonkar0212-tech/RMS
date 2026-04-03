
const PaymentModel = require("../models/Payment");
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const createorder = async (req, res) => {
    try {
        const { amount, currency = 'INR', customer, method, description } = req.body;

        const orderOptions = {
            amount: amount * 100, // convert to paise
            currency,
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(orderOptions);

        // Check for duplicate order if necessary — optional logic
        const existingPayment = await PaymentModel.findOne({ orderId: order.id });
        if (existingPayment) {
            return res.status(400).json({ error: "Payment already exists!" });
        }

        const payment = new PaymentModel({
            orderId: order.id,
            amount,
            currency,
            customer,
            method,
            description,
            status: "pending"
        });

        await payment.save();

        return res.status(200).json({
            message: "Order created successfully",
            orderId: order.id,
             amount: (order.amount / 100).toFixed(2), 
            currency: order.currency
        });

    } catch (err) {
        console.error("Error in creating order:", err);
        return res.status(500).json({ error: "Failed to create order" });
    }
};

const verifyorder = async (req , res) => {

    const { orderId , amount } = req.body

    const payment = await PaymentModel.findOne({
        orderId , amount
    })

    payment.status = "success";
     await payment.save()

     return res.status(200).json({ status : true , message : "Payment Successfully" , payment })


}


const getAllorder = async (req , res) => {

    // const { orderId , amount } = req.body

    const payment = await PaymentModel.find({
       
    })

    // payment.status = "success";
    //  await payment.save()

     return res.status(200).json({ status : true , message : "GetAll Payment Successfully" , payment })


}

const getorder = async (req , res) => {
  const {id} =req.params
    // const { orderId , amount } = req.body

    const payment = await PaymentModel.findById(
       id
    )

    // payment.status = "success";
    //  await payment.save()

     return res.status(200).json({ status : true , message : "Get Payment Successfully" , payment })
}

const deleteorder = async (req , res) => {
  const {id} =req.params
    // const { orderId , amount } = req.body

    const payment = await PaymentModel.findById(
       id
    )

    // payment.status = "success";
    //  await payment.save()

     return res.status(200).json({ status : true , message : "delete Payment Successfully" , payment })
}

module.exports = {
    createorder,
    verifyorder,
    getAllorder,
    getorder,
    deleteorder
};