const ProfesionModal = require("../model/ProfesionModal");
const DonorModal = require("../model/DonorModal");
const bcrypt = require("bcrypt");

const handleUserLogin = async (req, res) => {
  const { email, password } = await req.body.User;

  try {
    //will be used to hold user object result to compare pass
    const user = await DonorModal.findOne({ email });

    //loging user
    console.log(user);

    //1.check email if present
    if (await DonorModal.findOne({ email })) {
      //3.checking the current password against the hashed in db
      //bcrypt compare returns true or false text pss vs hash pass
      if (await bcrypt.compare(password, user.password)) {
        //all test passed  2:email, 3:pass allow login
        //login successful send response to the client

        await res.status(200).json({
          login: true,
          userID: user._id,
          message: "login successful",
          email:email
        });
      } else {
        //wrong password reject
        throw new Error(`wrong password ${password}`);
      }
    } else {
      throw new Error(`user ${email} does not exist!`);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const handleUserOfficialLogin = async (req, res) => {
  //destructuring
  const { email, password, key } = await req.body.User;

  try {
    //will be used to hold user object result to compare pass
    const findDoctor = await ProfesionModal.findOne({ email });

    //loging user
    console.log(findDoctor);

    //2.check email if present
    if (await ProfesionModal.findOne({ email })) {
      //3.checking the profesion key
      if (await ProfesionModal.findOne({ key })) {
        //4.checking the current password against the hashed on in db
        //bcrypt compare returns true or false text pss vs hash pass
        if (await bcrypt.compare(password, findDoctor.password)) {
          //login successful send response to the client

          await res.status(200).json({
            login: true,
            userID: findDoctor._id,
            message: "login successful",
            hosID:findDoctor.hosID
          });
        } else {
          //wrong password reject
          throw new Error(`wrong password ${password}!`);
        }
      } else {
        throw new Error(`Key ${key} not found!'`);
        //key wrong
      }
    } else {
      throw new Error(`user ${email} does not exist!`);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { handleUserLogin, handleUserOfficialLogin };
