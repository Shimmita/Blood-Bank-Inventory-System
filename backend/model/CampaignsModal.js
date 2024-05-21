const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "campaign description is required"],
      unique: [true, "campaign description should be unique"],
    },
    date: {
      type: String,
      required: [true, "campaign date is required"],
    },
    location: {
      type: String,
      required: [true, "campaign location is required"],
    },
  },
  { timestamps: true }
);

CampaignSchema.pre("save", async function (next) {
  const description = this.description;

  try {
    if (await this.constructor.findOne({ description: description })) {
      const err = new Error("campaign description already exists");
    
      return next(err);
    } 

    next();

  } catch (error) {
    next(error);
  }
});

const CampaignsModal = mongoose.model("Campaigns", CampaignSchema);
module.exports = CampaignsModal;
