const mongoose = require("mongoose")

const FacultySchema = new mongoose.Schema({
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
   dateofbirth: {
  type: Date,
  required: true, // or true if needed
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
   

    course:{
        type:  String,
    }
   
        


}, {
    timestamps: true
});



const FacultyModel = mongoose.model('Faculty', FacultySchema);
module.exports = FacultyModel;

