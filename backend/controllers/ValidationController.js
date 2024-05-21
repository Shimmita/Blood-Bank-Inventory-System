const ProfesionModal = require("../model/ProfesionModal");
const DonorModal = require("../model/DonorModal");


const handleDonorValidation=async(req,res)=>{
  
    let _id=req.params.id;
    console.log(_id)

   try {
    const donor= await DonorModal.findOne({_id});

    if(!donor){
       await res.status(400).json({
        message:'please login to continue'
       });
       return;
    }
    
    await res.status(200).json({
        donor:donor
    });

   } catch (error) {

    await res.status(400).send({
      message: 'user not found',
    });
   }

}

const handleDoctorValidation=async(req,res)=>{

    let _id=req.params.id;
   

   try {
    const doctor= await ProfesionModal.findOne({_id});

    if(!doctor){
       await res.status(400).json(donor);
       return;
    }
    
    await res.status(200).json({
        doctor:doctor
    });

   } catch (error) {

    await res.status(400).send({
      message: 'user not found',
    });
   }
}


module.exports={handleDoctorValidation,handleDonorValidation}