const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    phoneNumber: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female' , 'Others'],
        required: true,
    },
    dateOfbirth: {
        type: String,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },


    program: {
        type: String,      //  e.g //Bsc,Bcom,Msc,BBA//
        required: true

    },

    course: [String],
        
    guardianName: {
        name: String,
        relationship: String,
        contactNumber: String

    },

}, {
    timestamps: true
});



const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;

