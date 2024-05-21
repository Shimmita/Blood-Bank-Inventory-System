const HelpModal = require("../model/HelpModal");
const HelpModel = require("../model/HelpModal");
const createDonorHelp = async (req, res) => {
  try {
    const help = await HelpModel.create({
      email: req.body.email,
      donorID: req.body.donorID,
      message: req.body.message,
    });

    await res.status(200).json(help);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const retrieveHelpDonorSide = async (req, res) => {
  let donorID = req.params.id;

  try {
    const donorHelpMesages = await HelpModel.find({ donorID: donorID });

    //check if length is greater than zero
    if (donorHelpMesages.length > 0) {
      //empty array
      const messages = [];
      //for loop
      for (const donorHelpMessage of donorHelpMesages) {
        let email = donorHelpMessage.email;
        let message = donorHelpMessage.message;
        let donorID = donorHelpMessage.donorID;

        // Push appointment details into the array
        messages.push({
          email: email,
          message: message,
          donorID: donorID,
        });
      }

      await res.status(200).json(messages);
    } else {
      throw new Error("no help message found");
    }
  } catch (error) {
    await res.status(400).json(error.message);
  }
};

const deleteHelpMessage = async (req, res) => {
  const message = req.params.message;

  try {
 const result=   await HelpModel.findOneAndDelete({ message: message });

    res.status(200).json({
        message:"deleted successfully",
        data:result
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { createDonorHelp, retrieveHelpDonorSide ,deleteHelpMessage};
