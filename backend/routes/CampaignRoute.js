const { handleCampaignCreate, handleGetAllCampaigns} = require('../controllers/CampaignsController');

const campaignsRoute=require('express').Router();

//perform post request to add a campaign
campaignsRoute.post('/campaigns/create',handleCampaignCreate);

//perform get the campaign
campaignsRoute.post('/campaigns/all',handleGetAllCampaigns)


//export the route for usage outside this file
module.exports=campaignsRoute