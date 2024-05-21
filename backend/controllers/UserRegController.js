const HospitalModal = require("../model/HospitalModal");
const ProfesionModal = require("../model/ProfesionModal");
const DonorModal = require("../model/DonorModal");
const BloodModal=require('../model/BloodModal')

//fun reg new user

const handleUserRegistration = async (req, res) => {
  //destructuring the email and role for validation purposes
  let { role } = await req.body.User;

  let data = req.body.User;

  //log the data
  console.log(data);

  //officials registration
  if (role === "doctor") {
    //doctor registering
    //genarate key and add to the data as a property then save
    const official_key = generateKey();
    data.key = official_key;

    try {
      //log
      console.log("doctor registering");

      const User = await ProfesionModal.create(data);

      await res.status(200).json(User);

      //save the Bood
      let donorID=User._id;
      let expiry="120 days ";
      let group=User.blood

      await BloodModal.create({
        donorID:donorID,
        expiry:expiry,
        group:group
      })


    } catch (error) {
      await res.status(400).json(error.message);
    }
  } else {
    //donor registration since user not a doctor
    try {
      //log
      console.log("donor registering");

      const User = await DonorModal.create(data);

      //save the Bood
      let donorID=User._id;
      let expiry="120 days ";
      let group=User.blood

      await BloodModal.create({
        donorID:donorID,
        expiry:expiry,
        group:group
      })

      await res.status(200).json(User);
    } catch (error) {
      await res.status(400).json(error.message);
    }
  }

  //end
};

//fun reg new Hospital

const handleHospitalRegistration = async (req, res) => {
  const dataHospital = await req.body.Hospital;

  console.log(dataHospital);

  try {
    const Hospital = await HospitalModal.create(dataHospital);
    //successfully saved the hospital to the database
    await res.status(200).json(Hospital);
  } catch (error) {
    //failed
    await res.status(400).json(error.message);
  }
};

//fun key generator
const generateKey = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 8; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};

module.exports = { handleUserRegistration, handleHospitalRegistration };
