const { createAppointment, retrieveAppointments, retrieveAppointmentsDoctorSide, deletAppointment, updateAppointment } = require("../controllers/AppointmentController");

const makeAppointmentRoute=require("express").Router();


//make appointment
makeAppointmentRoute.post("/appointment/create/:id", createAppointment)
makeAppointmentRoute.post("/appointment/retrieve/:id", retrieveAppointments)
makeAppointmentRoute.post("/appointment/retrieve/doctor/:hosID", retrieveAppointmentsDoctorSide )
makeAppointmentRoute.delete("/appointment/delete/:id",deletAppointment)
makeAppointmentRoute.patch("/appointment/update/:id",updateAppointment)

//export appointmentRoute

module.exports = makeAppointmentRoute;