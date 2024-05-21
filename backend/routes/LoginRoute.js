const { handleUserLogin, handleUserOfficialLogin } = require("../controllers/UsersLoginController");

const loginRoute = require("express").Router();


//perform user login
loginRoute.post('/users/login', handleUserLogin)

//perform official user login
loginRoute.post('/users/login/official', handleUserOfficialLogin)





//exprt the module for resusability
module.exports=loginRoute
