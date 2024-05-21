const mongoose = require("mongoose");

const OfficialResponse = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "description is required"],
    },
    email: {
      type: String,
      required: [true, "email;  is required"],
    },
    hosID: {
      type: String,
      required: [true, "hospital ID is required"],
    },
  },
  { timestamps: true }
);


module.exports =mongoose.model('help',OfficialResponse)
