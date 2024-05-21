const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const HospitalModal = require("./HospitalModal");

const DoctorSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "enter a valid email"],
      lowercase: true,
    },
    blood: {
      type: String,
      required: [true, "blood group of the user is required"],
    },

    dob: {
      type: String,
      required: [true, "date of birth of the user is required"],
    },

    firstname: {
      type: String,
      required: [true, "firstname of the user is required"],
    },
    lastname: {
      type: String,
      required: [true, "lastname of the user is required"],
    },
    password: {
      type: String,
      required: [true, "password of the user is required"],
      minlength: [8, "minimum password length is 8 characters"],
    },
    key: {
      type: String,
      required: false,
      minlength: [8, "minimum length of the key is 8 characters"],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "phone number group of the user is required"],
    },

    county: {
      type: String,
      required: [true, "location of the user is required"],
    },

    hosID: {
      type: String,
      required: [true, "hospital registration number of the user is required"],
    },
    gender: {
      type: String,
      required: [true, "gender of the user is required"],
    },
    role: {
      type: String,
      required: [true, "role  of the user is required"],
    },
  },
  { timestamps: true }
);

//hash the password before saving the user details
DoctorSchema.pre("save", async function (next) {
  try {
    const email = this.email;
    const hosID = this.hosID;

    if (await HospitalModal.findOne({ hosID })) {
      //hospitalID is valid thus procees saving the Doctor
      if (await this.constructor.findOne({ email })) {
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
    } else {
      //hospitalID false thus reject saving
      const err = new Error("Invalid Hospital ID");
      return next(err);
    }
  } catch (error) {
    next(error);
  }
});

//exporting the model to be used by other files
module.exports = mongoose.model("doctor", DoctorSchema);
