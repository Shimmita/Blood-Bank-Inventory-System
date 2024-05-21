const CampaignsModal = require("../model/CampaignsModal");

const handleCampaignCreate = async (req, res) => {
  const {date, description, location} = req.body;

  try {
    await CampaignsModal.create({
        date: date,
        description: description,
        location: location,
    });

    //success
    await res.status(200).json({
      message: "campaign created successfully",
    });
  } catch (error) {
    await res.status(400).json({
      message: error.message,
    });
  }
};

const handleGetAllCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignsModal.find({});
    await res.status(200).json(campaigns);
  } catch (error) {
    await res.status(400).send({
      message: error.message,
    });
  }
};

//export the modules for usage outside of this module
module.exports = { handleCampaignCreate, handleGetAllCampaigns };
