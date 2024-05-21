const mongoose= require("mongoose");
const AppointmentSchema=new mongoose.Schema({
      donorID:{
        type: String,
        required: [true, "donor ID of the user is required"],
        unique:[true, "user has a pending appointment"]
      },

      status:{
        type:String,
        default: "pending",
        lowercase:true
        
      }

}, {
    timestamps: true,
  });





  const modelAppointment=mongoose.model("appointments", AppointmentSchema)

  //export the model

  module.exports=modelAppointment;

