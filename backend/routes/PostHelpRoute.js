const { createDonorHelp, retrieveHelpDonorSide, deleteHelpMessage } = require('../controllers/DonorHelpController');

const postHelpRouter=require('express').Router();

postHelpRouter.post('/help/create', createDonorHelp)
postHelpRouter.post('/help/retrieve/:id',retrieveHelpDonorSide )
postHelpRouter.delete('/help/delete/:message',deleteHelpMessage)

module.exports={postHelpRouter}