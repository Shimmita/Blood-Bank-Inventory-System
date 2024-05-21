  import React, { useEffect, useState } from "react";
  import { Col, Container, Row, Table, Image, Form } from "react-bootstrap";
  import {
    ArrowRightSquareFill,
    BarChartFill,
    BellFill,
    Calendar2Check,
    ChatFill,
    DropletFill,
    FlagFill,
    GearFill,
    MoonFill,
    PhoneFill,
  } from "react-bootstrap-icons";
  import "../../../styles/dashboard.css";
  import ChartsVisualise from "../../charts/ChartsVisualise";
  import devImage from "../../../images/logo.jpg";
  import { MessageUsers } from "./Message";
  import { ChatBot } from "./ChatBot";
  import { Profile } from "./Profile";
  import { CampaignsDashBoard } from "./CampaignsDashBoard";
  import { BloodBanksDash } from "./BloodBanks";
  import { Appointments } from "./Appointments";
  import { BloodRequestDash } from "./BloodRequest";
  import { Statistics } from "./Statistics";
  import CountiesInKenya from "../../../data/Counties";
  import axios from "axios";
import { useNavigate } from "react-router-dom";

  const BloodBankDashBoard = () => {

    //use navigate 
    const navigate=useNavigate()
    let [showDefault, setShowDefault] = useState(true);
    let [showFooters, setShowFooters] = useState(true);

    let [showDarkMode, setDarkMode] = useState(false);
    let [showMessage, setShowMessage] = useState(false);
    let [showChatBot, setShowChatBot] = useState(false);
    let [showProfile, setShoProfile] = useState(false);
    let [showCampaign, setShowCampaigns] = useState(false);
    let [showBloodBanks, setShowBloodBanks] = useState(false);
    let [showAppointments, setShowAppointments] = useState(false);
    let [showBloodRequest, setShowBloodRequest] = useState(false);
    let [showStatistics, setshowStatistics] = useState(false);
    let [showTopListMenu, setShowTopListMenu] = useState(true);

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

    //data for pie chat
    const data = [
      ["Blood Group", "Amount"],
      ["A+", 100],
      ["B+", 150],
      ["O", 120],
      ["AB", 80],
      ["A-", 50],
      ["B-", 75],
      ["AB-", 30],
      ["O-", 90],
    ];

    //holds the theme
    const handleTheme = () => {
      setDarkMode(!showDarkMode);
    };
    //controls showing send message panel
    const handleShowMessage = () => {
      setShowMessage(true);

      //the middle section set to invisible -> piechart and table part
      setShowDefault(false);
      setShowChatBot(false);
      setShoProfile(false);
      setShowCampaigns(false);
      setShowBloodBanks(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(false);
      setShowFooters(true);
      setShowTopListMenu(true);
    };

    //controls showing of chatBot
    const handleShowChatBot = () => {
      setShowChatBot(true);
      //false other views all
      setShowDefault(false);
      setShoProfile(false);
      setShowMessage(false);
      setShowCampaigns(false);
      setShowBloodBanks(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(false);
      setShowFooters(false);
      setShowTopListMenu(true);
    };

    //control showing profile
    const handleShowProfile = () => {
      setShoProfile(true);
      //set invisible
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowCampaigns(false);
      setShowBloodBanks(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(false);
      setShowFooters(true);
      setShowTopListMenu(true);
    };

    //handle page reloading
    const handlePageReload = () => {
      window.location.reload();
    };
    //show campaign components
    const handleShowCampaign = () => {
      setShowCampaigns(true);
      //set invisible
      setShoProfile(false);
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowBloodBanks(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(false);
      setShowFooters(true);
      setShowTopListMenu(true);
    };

    const handleShowBloodBanks = () => {
      setShowBloodBanks(true);
      //set invisible
      setShowCampaigns(false);
      setShoProfile(false);
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(false);
      //setshowFooter false
      setShowFooters(false);
      setShowTopListMenu(true);
    };

    //show appointments
    const handleShowAppointments = () => {
      setShowBloodBanks(false);
      setShowCampaigns(false);
      setShoProfile(false);
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowAppointments(true);
      setShowBloodRequest(false);
      setshowStatistics(false);
      setShowFooters(true);

      setShowTopListMenu(true);
    };

    //show blood requests
    const handleShowRequest = () => {
      setShowBloodBanks(false);
      setShowCampaigns(false);
      setShoProfile(false);
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowAppointments(false);
      setShowBloodRequest(true);
      setshowStatistics(false);

      //false footer
      setShowFooters(false);
      setShowTopListMenu(true);
    };

    const handleShowStats = () => {
      setShowBloodBanks(false);
      setShowCampaigns(false);
      setShoProfile(false);
      setShowDefault(false);
      setShowChatBot(false);
      setShowMessage(false);
      setShowAppointments(false);
      setShowBloodRequest(false);
      setshowStatistics(true);
      setShowFooters(false);
      setShowTopListMenu(false);
    };

    



    //campaigns data
    let [date, setDate] = useState("");
    let [description, setDescription] = useState("");
    let [location, setLocation] = useState("");
    let [isLoadingPost, setIsLoading] = useState(false);
    let [errorPost, setErrorPost] = useState("");
    let [successPost, setSuccessPost] = useState(false);

    let campaign_url_post = "http://localhost:1010/bloodAPI/campaigns/create";

    //handle posting of the campaign to the backend using axios
    const handlePostCampaign = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await axios.post(campaign_url_post, {
          date: date,
          description: description,
          location: location,
        });
        //posting campaign succeeded
        setIsLoading(false);
        setSuccessPost(true);
        setErrorPost("");
      } catch (error) {
        //posting campaign failed
        setSuccessPost(false);
        setIsLoading(false);
        setErrorPost(error.response.data.message);
        console.log(error.response.data.message);
      }
    };


    //request Blood data
    let [doctorsName, setDoctorsName] = useState("");
    let [bloodGroup, setBloodGroup] = useState("");
    
    let [sender, setSender] = useState(""); //get from user log in object response
    let [senderHospID, setSenderHospID] = useState(""); //get from user log in object response

    let [quantity, setQuantity] = useState("");
    let request_blood_url = "http://localhost:1010/bloodAPI/bloodrequest/create";


    const handleRequestBlood=async(e)=>{
      e.preventDefault();

      //try catch block for handling any errors which may arise
      setIsLoading(true);

      try {
        await axios.post(request_blood_url, {
          bloodgroup: bloodGroup,
          doctor: doctorsName,
          quantity: quantity,
          senderHospID:senderHospID
        });
        //posting campaign succeeded
        setIsLoading(false);
        setSuccessPost(true);
        setErrorPost("");
      } catch (error) {
        //posting campaign failed
        setSuccessPost(false);
        setIsLoading(false);
        setErrorPost(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
    //handle showing of the top list menu
    useEffect(() => {
      // Retrieve user ID from local storage
      const userData = JSON.parse(localStorage.getItem('userData'))
     
      if (userData) {
  
        // Send the user ID to the backend for validation
        validateUser(userData.userID);
      } else {
        // If user ID doesn't exist in local storage, redirect to login page
        navigate('/');
      }
    }, ); // Run once on component mount
  
    const validateUser = (userId) => {
      let donor_validation_url=`http://localhost:1010/bloodAPI/validationDoctor/${userId}`
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

    //handle the request blood
    
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
                onClick={handlePageReload}
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
          <div className="container-dash ">
            <div
              className="sidebar-dashboard rounded  py-2  px-5 shadow fw-bold"
              style={{ background: showDarkMode ? "grey" : "" }}
            >
              <h4 className="text-light text-center  ">DashBoard</h4>
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

                <li className="mb-5 p-2 list-sidebar" onClick={handleShowStats}>
                  {" "}
                  <BarChartFill className="me-3" /> Statistics{" "}
                </li>

                <li className="mb-5 p-2 list-sidebar" onClick={handleShowProfile}>
                  {" "}
                  <GearFill className="me-3" /> Profile{" "}
                </li>

                {/* <li className="mb-5 p-2 list-sidebar" onClick={handleShowMessage}>
                  {" "}
                  <ChatFill className="me-3" /> Message{" "}
                </li> */}

                {/* <li className="mb-5 p-2 list-sidebar" onClick={handleShowChatBot}>
                  {" "}
                  <PhoneFill className="me-3" /> ChatBot{" "}
                </li> */}
                <li className="mb-5 p-2  list-sidebar " onClick={handleTheme}>
                  {" "}
                  <MoonFill className="me-3" /> Theme{" "}
                </li>

                <li className="mb-5 p-2 list-sidebar">
                  {" "}
                  <ArrowRightSquareFill className="me-3" /> Logout{" "}
                </li>
              </ul>
            </div>
            <div className="main-content-dash shadow px-3">
              {/* sho toplist menu based on conditio */}
              {showTopListMenu && (
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
                  <Col className="banks" onClick={handleShowBloodBanks}>
                    <div className="p-5 bg-white rounded">
                      <DropletFill color="grey" size={25} />
                      <h6 className="mt-1">Blood Banks 695</h6>
                    </div>
                  </Col>
                  <Col className="appointments" onClick={handleShowAppointments}>
                    <div className="p-5 bg-white rounded ">
                      <Calendar2Check color="grey" size={25} />
                      <h6 className="mt-1">Appointments 4</h6>
                    </div>
                  </Col>
                  <Col className="requests" onClick={handleShowRequest}>
                    <div className="p-5 bg-white rounded ">
                      <BellFill color="grey" size={25} />
                      <h6 className="mt-1">Blood Request 3</h6>
                    </div>
                  </Col>
                </Row>
              )}

              {/* show by conditional rendering */}
              {/* show stats */}
              {showStatistics && <Statistics />}

              {/* show blood request */}

              {showBloodRequest && <BloodRequestDash />}

              {/* show appointments */}
              {showAppointments && <Appointments />}

              {/* show blood banks */}
              {showBloodBanks && <BloodBanksDash />}

              {/* show campaigns */}
              {showCampaign && <CampaignsDashBoard />}

              {/* show profile  */}
              {showProfile && <Profile />}

              {/* show chatBot true */}
              {showChatBot && <ChatBot />}

              {/* show messaging components if true */}
              {showMessage && <MessageUsers />}

              {/* show default launh minimums */}
              {showDefault && (
                <Row className="py-2 ">
                  <Col>
                    <p className="text-center text-light">Visualisation</p>
                    <ChartsVisualise data={data} />
                  </Col>
                  <Col>
                    <p className="text-center text-light">Blood Inventory</p>
                    <Table striped="columns rounded">
                      <thead>
                        <tr>
                          <th>Blood type</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bloodInventory.map((bloodGroup, index) => (
                          <tr key={bloodGroup.type}>
                            <td>{bloodGroup.type}</td>
                            <td>{bloodGroup.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              )}


              {showFooters&&  (
                <Row className="py-1">
                  <hr/>
                  <Col>
                    <form
                      className="rounded border p-2 bg-light"
                      onSubmit={handlePostCampaign}
                    >
                      {/* render success message if true  */}
                      {successPost && (
                        <p className="text-center text-success fw-bold">
                          campaign added successfully
                        </p>
                      )}

                      {!errorPost && !successPost && (
                        <p className="text-center">Post Campaign</p>
                      )}
                      {/* show error if present */}
                      {errorPost && (
                        <p className="text-center text-danger fw-bold">
                          {errorPost}
                        </p>
                      )}

                      <div>
                        {" "}
                        <input
                          type="date"
                          value={date}
                          required
                          className="form-control"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <Form.Select
                        aria-label="select county"
                        className="mt-2"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option>County</option>
                        {CountiesInKenya.map((county) => (
                          <option key={county} value={county}>
                            {county}
                          </option>
                        ))}
                      </Form.Select>

                      <div className="mt-2">
                        <textarea
                          placeholder="Campaign description"
                          className="form-control"
                          value={description}
                          required
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="mt-2">
                        {/* show button only if no posting is on progress */}
                        {isLoadingPost ? (
                          <div>
                            <h5 className="text-center text-primary">
                              processing...
                            </h5>
                          </div>
                        ) : (
                          <button className="btn btn-secondary w-100">
                            Post
                          </button>
                        )}
                      </div>
                    </form>
                  </Col>
                
                  <Col>
                    <form className="rounded border p-2 bg-light" onSubmit={handleRequestBlood}>
                      <p className="text-center">Request Blood</p>
                      <div>
                        {" "}
                        <Form.Select
                          aria-label="blood group"
                          className="mb-3"
                          value={bloodGroup}
                          onChange={(e) => setBloodGroup(e.target.value)}
                        >
                          <option value={"select blood group"}>select blood group</option>
                          <option value="A RhD positive (A+)">
                            A RhD positive (A+)
                          </option>
                          <option value="A RhD negative (A-)">
                            A RhD negative (A-)
                          </option>
                          <option value="B RhD positive (B+)">
                            B RhD positive (B+)
                          </option>
                          <option value="B RhD negative (B-)">
                            B RhD negative (B-)
                          </option>
                          <option value="O RhD positive (O+)">
                            O RhD positive (O+)
                          </option>
                          <option value="O RhD negative (O-)">
                            O RhD negative (O-)
                          </option>
                          <option value="AB RhD positive (AB+)">
                            AB RhD positive (AB+)
                          </option>
                          <option value="AB RhD negative (AB-)">
                            AB RhD negative (AB-)
                          </option>
                        </Form.Select>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="hospital code"
                          value={"Doctor: Shimita Douglas"}
                          disabled
                        />
                      </div>

                      <div className="mt-2">
                        <input
                          placeholder="quantity in numbers"
                          className="form-control"
                          type="number"
                          value={quantity}
                          onChange={(e)=>setQuantity(e.target.value)}
                        />
                      </div>

                      <div className="mt-3">
                        <button className="btn btn-secondary w-100" >
                          Request
                        </button>
                      </div>
                    </form>
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  };

  export default BloodBankDashBoard;
