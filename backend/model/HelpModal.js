const mongoose = require("mongoose");

const HelpModel = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "description is required"],
    },
    donorID: {
      type: String,
      required: [true, "donorID  is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
  },
  { timestamps: true }
);


module.exports =mongoose.model('help',HelpModel)
