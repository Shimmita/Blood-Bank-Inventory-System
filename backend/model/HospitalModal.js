const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const HospitalSchema = new mongoose.Schema(
  {
    county: {
      type: String,
      required: [true, "county location  of the hospital is required"],
    },
    longitude:{
      type:String,
      required: [true, "longitude location of the hospital is required"],
    },
    latitude:{
      type:String,
      required: [true, "latitude of the hospital is required"],
    },
    email: {
      type: String,
      required: [true, "email of the hospital is required"],
      lowercase: true,
      unique: true,
      validate: [isEmail, "enter a valid email"],
    },
    hosID: {
      type: String,
      unique: true,
      required: [true, "registration number of the hospital is required"],
    },
    name: {
      type: String,
      required: [true, "name of the hospital is required"],
    },
    password: {
      type: String,
      required: [true, "password of the hospital is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number of the hospital is required"],
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

//hashing the password before saving it to the database
HospitalSchema.pre("save", async function (next) {
  //checking the email existance before saving
  try {
    const existingUser = await this.constructor.findOne({ email: this.email });
    if (existingUser) {
      //user exists thus reject saving
      const err = new Error("Email already exists");
      return next(err);
    } else {
      //save user does not exist
      //salt value the will be used in hashing the passord
      const salt = await bcrypt.genSalt(10);
      //hashing the password
      this.password = await bcrypt.hash(this.password, salt);
      next();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("hospitals", HospitalSchema);
