const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        default: null
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        required: true
    },
    customer: {
        name: String,
        email: String,
        phone: String,
        address: String,
        country: String
    },
    method: {
        type: String,
        enum: ['card', 'netbanking', 'upi', 'wallet', 'other'],
        required: false
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

const PaymentModel = mongoose.model('Payment', PaymentSchema);
module.exports = PaymentModel;
