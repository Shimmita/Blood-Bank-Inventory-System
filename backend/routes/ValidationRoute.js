const { handleDonorValidation, handleDoctorValidation } = require("../controllers/ValidationController");

const validationRoute=require("express").Router()

validationRoute.post("/validationDonor/:id", handleDonorValidation)
validationRoute.post("/validationDoctor/:id", handleDoctorValidation)


module.exports=validationRoute;