const HospitalModal = require("../model/HospitalModal");
const ProfesionModal = require("../model/ProfesionModal");
const DonorModal = require("../model/DonorModal");
const AppointMentModal = require("../model/AppointmentsModal");
const NotificationModel=require("../model/HelpModal");

const createAppointment = async (req, res) => {
  let _id = req.params.id;

  try {
    //serch the user with the ID params
    const user = await DonorModal.findById({ _id });
    //check if the user is a donor
    if (!user) {
      throw new Error("failed to locate user");
    } else {
      //check if the donor is already made an appointment
      const checkAppointment = await AppointMentModal.findOne({ donorID: _id });
      if (!checkAppointment) {
        const appointment = await AppointMentModal.create({ donorID: _id });
        await res.status(200).json({
          message: "appointment request successful",
          appointment: appointment,
        });
      } else {
        throw new Error(
          "you  already have a pending request,kindly wait for approval from the officials"
        );
      }
    }
  } catch (error) {
    await res.status(400).json(error.message);
  }
};

//retrieve specific donor details
const retrieveAppointmentsDonorSide = async (req, res) => {
  let _id = req.params.id;

  try {
    // Find all appointments associated with the donorID
    const appointments = await AppointMentModal.find({ donorID: _id });

    if (appointments.length > 0) {
      // Array to store appointment details
      const appointmentDetails = [];

      // Iterate over each appointment and collect details
      for (const appointment of appointments) {
        // Find the donor details associated with the appointment
        const donor = await DonorModal.findOne({ _id: appointment.donorID });

        if (donor) {
          let name = `${donor.firstname} ${donor.lastname}`;
          let phone = donor.phone;
          let email = donor.email;
          let blood = donor.blood;
          let gender = donor.gender;
          let status = appointment.status;

          // Push appointment details into the array
          appointmentDetails.push({
            name: name,
            phone: phone,
            email: email,
            blood: blood,
            gender: gender,
            status: status,
            appointmentID: appointment._id,
          });
        }
      }

      // Return the array of appointment details to the frontend
      await res.status(200).json(appointmentDetails);
    } else {
      throw new Error("Currently there are no appointments");
    }
  } catch (error) {
    await res.status(400).json({ message: error.message });
  }
};

//retrieve  appointments clienst doctors side

const retrieveAppointsDoctorsSide = async (req, res) => {
  let paramsHosID = req.params.hosID;

  try {
    // Check in donor models where the user has this hospitalID
    const donors = await DonorModal.find({ hosID: paramsHosID });

    if (donors.length > 0) {
      // Collect all donor IDs
      const donorIDs = donors.map((donor) => donor._id);

      // Find appointments for all donor IDs
      const appointments = await AppointMentModal.find({
        donorID: { $in: donorIDs }, // Find appointments where donorID is in donorIDs array
      });

      if (appointments.length > 0) {
        let donorResults = [];

        for (const appointment of appointments) {
          let donorFind = await DonorModal.findOne({
            _id: appointment.donorID,
          });

          if (!donorFind) {
            throw new Error("Donor not found");
          }

          //donor present
          const name = `${donorFind.firstname} ${donorFind.lastname}`;
          const phone = donorFind.phone;
          const email = donorFind.email;
          const gender = donorFind.gender;
          const blood = donorFind.blood;
          const county = donorFind.county;
          const appointmentID = appointment.donorID;

          donorResults.push({
            name: name,
            phone: phone,
            email: email,
            gender: gender,
            blood: blood,
            county: county,
            appointmentID: appointmentID,
            status: appointment.status,
          });
        }

        res.status(200).json(donorResults);

        // Return all appointments
      } else {
        throw new Error(
          "Currently there are no appointments for the donors with the given hospital ID"
        );
      }
    } else {
      throw new Error(
        "Currently there are no donors with the given hospital ID"
      );
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletAppointment = async (req, res) => {
  const appointmentId = req.params.id;

  try {
    // Find appointment by ID and delete it
    const deletedAppointment = await AppointMentModal.findOneAndDelete({
      donorID: appointmentId,
    });

    if (!deletedAppointment) {
      throw new Error("Appointment not found");
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateAppointment = async (req, res) => {
  const appointmentId = req.params.id;

  let state = `${req.body.state}`;

  try {
    if (state === "reject") {
      state = "rejected";
      const appointment = await AppointMentModal.updateOne(
        {
          donorID: appointmentId,
        },
        { $set: { status: state } }
      );

      await res.status(200).json(appointment);
    }

    if (state === "approve") {
      state = "approved";
      const appointment = await AppointMentModal.updateOne(
        {
          donorID: appointmentId,
        },
        { $set: { status: state } }
      );

      await res.status(200).json(appointment);
    }
  } catch (error) {
    await res.status(404).json(error.message);
  }
};

module.exports = {
  createAppointment,
  retrieveAppointments: retrieveAppointmentsDonorSide,
  retrieveAppointmentsDoctorSide: retrieveAppointsDoctorsSide,
  deletAppointment,
  updateAppointment,
};
