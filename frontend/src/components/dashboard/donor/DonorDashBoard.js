import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import {
  ArrowRightSquareFill,
  BellFill,
  Calendar2Check,
  ChatFill,
  DropletFill,
  FlagFill,
  GearFill,
  MoonFill
} from "react-bootstrap-icons";
import devImage from "../../../images/logo.jpg";
import "../../../styles/dashboard.css";

import { useNavigate } from "react-router-dom";
import { DonorAppointments } from "./DonorAppointments";
import { DonorCampaigns } from "./DonorCampaigns";
import { DonorProfile } from "./DonorProfile";
import axios from "axios";
import SupportDonor from "./SupportDonor";
import { DonorNotification } from "./DonorNotification";


const DonorDashBoard = () => {
  const [userID, setUserID] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  //init use navigate
  const navigate = useNavigate();

  let [showDefault, setShowDefault] = useState(true);
  let [showDarkMode, setDarkMode] = useState(false);
  let [showProfile, setShowProfile] = useState(false);
  let [showCampaigns, setShowCampaigns] = useState(false);
  let [showAppointments, setShowAppointments] = useState(false);
  let [showSupport, setShowSupport] = useState(false);
  let [showNotification, setShowNotification] = useState(false);
 


  const bloodInventory = [
    { type: "A+", quantity: 100 },
    { type: "B+", quantity: 150 },
    { type: "O", quantity: 120 },
    { type: "AB", quantity: 80 },
    // Add more blood groups here as needed
    { type: "A-", quantity: 50 },
    { type: "B-", quantity: 75 },
    { type: "AB-", quantity: 30 },
    { type: "O-", quantity: 90 },
  ];


  //holds the theme
  const handleTheme = () => {
    setDarkMode(!showDarkMode);
  };

  //referesh home
  const handleRefereshHome = () => {
    navigate("/donorDashBoard");
    setShowDefault(true)
  };

  //handle logout
  const handleLogout = () => {};
  //handleShowProfile
  const handleShowProfile = () => {
    setShowProfile(true);

    setShowDefault(false);
    setShowSupport(false);
    setShowCampaigns(false);
    setShowNotification(false);
    setShowAppointments(false);
    
  };
  //handleShowSupport
  const handleShowSupport = () => {
    setShowProfile(false);
    setShowDefault(false);
    setShowSupport(true);
    setShowCampaigns(false);
    setShowNotification(false);
    setShowAppointments(false);
  };

  //handleShowTheme
  const handleThemeChange = () => {};

  //handleShow campaigns
  const handleShowCampaign = () => {
    setShowProfile(false);

    setShowDefault(false);
    setShowSupport(false);
    setShowCampaigns(true);
    setShowNotification(false);
    setShowAppointments(false);
  };

  //show notification
  const handleShowNotification = () => {
    setShowProfile(false);
    setShowDefault(false);
    setShowSupport(false);
    setShowCampaigns(false);
    setShowNotification(true);
    setShowAppointments(false);
  };

  // show appointments
  const handleShowAppointments = () => {
    setShowProfile(false);
    setShowDefault(false);
    setShowSupport(false);
    setShowCampaigns(false);
    setShowNotification(false);
    setShowAppointments(true);
   
  };



  useEffect(() => {
    // Retrieve user ID from local storage
    const userData = JSON.parse(localStorage.getItem('userData'))
    //set userID  and email for global access
    setUserID(userData.userID)
    setUserEmail(userData.email)
   
    if (userData) {

      // Send the user ID to the backend for validation
      validateUser(userData.userID);
    } else {
      // If user ID doesn't exist in local storage, redirect to login page
      navigate('/');
    }
  }, ); // Run once on component mount

  const validateUser = (userId) => {
    let donor_validation_url=`http://localhost:1010/bloodAPI/validationDonor/${userId}`
   // Make an API call to validate the user
        axios.post(donor_validation_url)
      .then(response => {
        // If user is valid, do nothing (user remains on this component)
        // If user is invalid, redirect to login page
       
      })
      .catch(error => {
        navigate("/")
      });

    
  };


  return (
    <div
      className="parent-container vh-100 "
      style={{ background: showDarkMode ? "grey" : "" }}
    >
      <Container fluid>
        <Row className="py-1">
          <div className="d-flex justify-content-between align-items-center mt-1 p-2">
            <h5
              className="text-light mx-5 titleDashBoard fw-bold"
              onClick={handleRefereshHome}
            >
              <DropletFill color="white" /> Blood Bank Inventory And Management
              System
            </h5>
            <Image
              src={devImage}
              className="icon-user me-3"
              width={40}
              style={{ borderRadius: "50%", border: "1px solid grey" }}
            />
          </div>
          <hr style={{ color: "white" }} />
        </Row>
        <div className="container-dash fw-bold ">
          <div
            className="sidebar-dashboard rounded  py-2  px-5 shadow"
            style={{ background: showDarkMode ? "grey" : "" }}
          >
            <p className="text-light text-center">DashBoard</p>
            <hr />
            <p className="text-light text-center">Shimmita Douglas</p>
            <hr />
            <ul className="text-light text-center p-3">
              <li className="mb-3 p-2 list-sidebar">
                {" "}
                <Image
                  src={devImage}
                  width={110}
                  style={{ borderRadius: "50%", border: "1px solid grey" }}
                />
              </li>

              <li className="mb-5 p-2 list-sidebar" onClick={handleShowProfile}>
                {" "}
                <GearFill className="me-3" /> Profile{" "}
              </li>

              <li className="mb-5 p-2 list-sidebar" onClick={handleShowSupport}>
                {" "}
                <ChatFill className="me-3" />
                Support{" "}
              </li>
              <li
                className="mb-5 p-2  list-sidebar "
                onClick={handleThemeChange}
              >
                {" "}
                <MoonFill className="me-3" /> Theme{" "}
              </li>

              <li className="mb-5 p-2 list-sidebar" onClick={handleLogout}>
                {" "}
                <ArrowRightSquareFill className="me-3" /> Logout{" "}
              </li>
            </ul>
          </div>
          <div className="main-content-dash shadow px-3">
            <Row className="text-center">
              <Col>
                <div
                  className="p-5 bg-white rounded campaign"
                  onClick={handleShowCampaign}
                >
                  <FlagFill color="grey" size={25} />
                  <h6 className="mt-1">Campaigns 8</h6>
                </div>
              </Col>
              <Col className="banks">
                <div
                  className="p-5 bg-white rounded"
                  onClick={handleShowNotification}
                >
                  <BellFill color="grey" size={25} />
                  <h6 className="mt-1">Notifications 3</h6>
                </div>
              </Col>
              <Col className="appointments">
                <div
                  className="p-5 bg-white rounded "
                  onClick={handleShowAppointments}
                >
                  <Calendar2Check color="grey" size={25} />
                  <h6 className="mt-1">Appointments 4</h6>
                </div>
              </Col>
            </Row>

            <Row className="py-2 mt-3 ">
            
             
              {/* show notification */}
              {showNotification &&(
                <DonorNotification/>
              )}
              {/* show support */}
              {showSupport && (
               <SupportDonor userID={userID} userEmail={userEmail}/>
              )}
              {/* show appointments */}
              {showAppointments && (
                <DonorAppointments/>
              )}
              {/* show profile */}
              {showProfile && <DonorProfile />}
              {/* show campaigns */}
              {showCampaigns && <DonorCampaigns />}

              {/* show defaults that is the blood distribution table  */}
              {showDefault && (
                <Col>
                  <p className="text-center text-light fw-bold">
                    Hospital Blood Distribution
                  </p>
                  <hr />
                  <Table striped="columns rounded">
                    <thead>
                      <tr>
                        <th>Blood type</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bloodInventory.map((bloodGroup, index) => (
                        <tr key={index}>
                          <td>{bloodGroup.type}</td>
                          <td>{bloodGroup.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonorDashBoard;
