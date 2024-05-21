const { handleBloodRequestCreate, handleBloodRequestGetAll } = require('../controllers/BloodRequestsController');

const bloodRequesRoute= require('express').Router();

bloodRequesRoute.post('/bloodrequest/create',handleBloodRequestCreate)
bloodRequesRoute.post('/bloodrequest/all',handleBloodRequestGetAll)



//export the route
module.exports=bloodRequesRoute;