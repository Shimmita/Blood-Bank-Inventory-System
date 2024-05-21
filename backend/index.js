const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const bodyParser = require("body-parser");
const registrationRoute = require("./routes/RegistrationRoute");
const loginRoute = require("./routes/LoginRoute");
const campaignsRoute = require("./routes/CampaignRoute");
const mongoose = require("mongoose");
const bloodRequesRoute = require("./routes/BloodRequest");
const hospitalRoute = require("./routes/HospitalsRoute");
const cookieParser=require("cookie-parser");
const validationRoute = require("./routes/ValidationRoute");
const makeAppointmentRoute = require("./routes/AppointmentRoute");
const { postHelpRouter } = require("./routes/PostHelpRoute");

//cors initialisation
app.use(cors());
//make use of express json for parsing data into json object
app.use(bodyParser.json());
app.use(cookieParser())
//port number from dotenv
const port = process.env.PORT;

//making the app ready fro HTTP request
app.listen(port, () =>
  console.log(`Server is running and listening on port ${port}!`)
);
 
//mongoDB database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() =>
    console.log("Congrats API is connected to the MongoDB successfully!")
  )
  .catch(() => console.log("Failed, API did not connnect to the MongoDB!"));

//registration route
app.use("/bloodAPI", registrationRoute);

//userLogin
app.use("/bloodAPI", loginRoute);

//campaigns route
app.use("/bloodAPI", campaignsRoute);

//Blood Request Route
app.use("/bloodAPI", bloodRequesRoute);

//hospitals route
app.use("/bloodAPI", hospitalRoute);

//check if user currently logged in and if yes then send the user data
app.use("/bloodAPI",validationRoute)

//make appointment routes

app.use("/bloodAPI", makeAppointmentRoute)

//post help to the Server
app.use("/bloodAPI",postHelpRouter)



///handle url/ page not found error 404. the provided url didnt match any known url
app.use((req, res) => {
  const message_routeError = "page not found!";
  res.status(404).send(message_routeError);
});
