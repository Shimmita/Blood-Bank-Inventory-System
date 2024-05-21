const {handleUserRegistration, handleHospitalRegistration } = require("../controllers/UserRegController");

const registrationRoute = require("express").Router();


//perform new userRegistration
registrationRoute.post('/users/newUser', handleUserRegistration)

//perform hospital Registration
registrationRoute.post('/hospitals/newHospital', handleHospitalRegistration)

//exprt the module for resusability
module.exports=registrationRoute
