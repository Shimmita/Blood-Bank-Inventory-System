const { upperCase } = require("lodash");
const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema(
  {
   
    expiry: {
        type: String,
  
    },
    donorID:{
      type: String,
      required: [true, "blood donor ID of the user is required"],
    },
    group:{
      type: String,
      required: [true, "blood group of the user is required"],
    }
  },
  
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Blood", BloodSchema);
