const { hospitaModalGetAll } = require('../controllers/HospitalController');

const hospitalRoute=require('express').Router();

//get route for retrieving all hospital

hospitalRoute.get('hospital/all',hospitaModalGetAll );


//export the hospital route
module.exports=hospitalRoute;