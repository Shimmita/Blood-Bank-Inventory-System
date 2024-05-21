const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema(
  {
    bloodgroup: {
      type: String,
      required: [true, "blood group is required"],
    },
    doctor: {
      type: String,
      required: [true, "doctor name is required"],
    },
  
    senderHospID:{
        type: String,
        required: [true, "registration number of the requesting hospital is required"],
    },
    recipientHospID:{
        type: String,
        required: [true, "registration number of the receiving hospital is required"],
    },
   
    quantity: {
        type: Number,
        required: [true, "quantity of the blood is required"],
    }
  },
  { timestamps: true }
);

//model for the blood request
const BloodRequestModal = mongoose.model("BloodRequest", BloodSchema);
module.exports = BloodRequestModal;
