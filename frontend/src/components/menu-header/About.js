import React, { useState } from "react";
import "../../styles/home.css";
import NavBarMain from "../navbar/NavBar";
import ImageDonateBlood from "../../images/donate_blood.jpg";
import { Image, Card, Button, Table, Badge } from "react-bootstrap";
import {
  BarChart,
  Headphones,
  Person,
  PersonAdd,
  Question,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import FAQs from "../sidebar/FAQs";
import Help from "../sidebar/Help";
import Campaigns from "../sidebar/Campaigns";
import AboutData from "./service/AboutData";
function About() {
  //default true show about other false since main route is services
  const [isSHowAbout, setShowAbout] = useState(true);


  const [isShowDefault, setShowDefault] = useState(false);
  const [isShowQuiz, setShowQuiz] = useState(false);
  const [ishowHelp, setShowHelp] = useState(false);
  const [isShowReports, setShowReport] = useState(false);
  const [ishowCampaigns, setShowCampaigns] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleShowCampaigns = () => {
    setShowCampaigns(true);
    setShowReport(false);
    setShowHelp(false);
    setShowQuiz(false);
    setShowAbout(false)

    setShowDefault(false);
  };
  const handleShowHelp = () => {
    setShowCampaigns(false);
    setShowReport(false);
    setShowHelp(true);
    setShowQuiz(false);
    setShowAbout(false)


    setShowDefault(false);
  };
  const handleShowQuiz = () => {
    setShowCampaigns(false);
    setShowReport(false);
    setShowHelp(false);
    setShowQuiz(true);
    setShowAbout(false)

    setShowDefault(false);
  };

  const handleShowReports = () => {
    setShowCampaigns(false);
    setShowReport(true);
    setShowHelp(false);
    setShowQuiz(false);
    setShowAbout(false)


    setShowDefault(true);
  };

  return (
    <div className="parent-container vh-100">
      <NavBarMain />
      <div className="container-home ">
        <aside className="sidebar-contaner">
          <ul className="sidebar-list-container">
            <div style={{ display: "grid", placeItems: "center" }}>
              <Image
                src={ImageDonateBlood}
                className="sidebar-image-container rounded"
              />
            </div>
            <li className="sidebar-list-item">
              {" "}
              <BarChart size={20} className="icon-list" />{" "}
              <Button
                variant="outline-light"
                onClick={handleShowReports}
                style={{ paddingRight: "2rem" }}
              >
                Reports and statistics
              </Button>
            </li>

            <li className="sidebar-list-item">
              {" "}
              <Person size={20} className="icon-list" />{" "}
              <Button
                variant="outline-light"
                onClick={handleShowCampaigns}
                style={{ paddingRight: "1rem" }}
              >
                Explore Campaigns <Badge bg="secondary">3</Badge>
              </Button>
            </li>
            <li className="sidebar-list-item">
              <Question size={25} className="icon-list" />
              <Button
                variant="outline-light"
                onClick={handleShowQuiz}
                style={{ paddingRight: "2rem" }}
              >
                Explore Frequent QAs
              </Button>
            </li>
            <li className="sidebar-list-item">
              {" "}
              <Headphones size={20} className="icon-list" />
              <Button
                variant="outline-light"
                onClick={handleShowHelp}
                style={{ paddingRight: "2rem" }}
              >
                Find Help and Support
              </Button>
            </li>
          </ul>
        </aside>

        <div
          className="container-content bg-light rounded ms-4"
          style={{ opacity: ".7", marginTop: "2rem", display: "flex" }}
        >
          <div
            className="container-accounts border m-1 rounded"
            style={{ flex: "1" }}
          >
            <div className="d-flex justify-content-center p-3 ">
              <Card style={{ width: "18rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <PersonAdd size={50} color="#9198e5" />
                </div>
                <Card.Body>
                  <Card.Text>
                    Join the lifesaving mission by registering with our Blood
                    Bank Inventory System. Be a vital part of our community
                    committed to making a difference.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    onClick={handleRegister}
                    className="w-100"
                  >
                    register
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="d-flex justify-content-center p-3">
              <Card style={{ width: "18rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <Person size={50} color="#9198e5" />
                </div>
                <Card.Body>
                  <Card.Text>
                    Login and access vital tools to support the lifesaving
                    mission and be an integral part of our community dedicated
                    to making a difference.
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    onClick={handleLogin}
                    className="w-100"
                  >
                    login
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="container-description" style={{ flex: "2" }}>
            {/* display campigns */}
            {ishowCampaigns && (
              <section className="p-3">
                <Campaigns />
              </section>
            )}

            {/* display the help Component */}
            {ishowHelp && (
              <section className="p-3">
                <Help />
              </section>
            )}
            {/* display the QUIZ */}
            {isShowQuiz && (
              <section
                className="p-3"
                style={{ maxHeight: "700px", overflow: "hidden" }}
              >
                <FAQs />
              </section>
            )}

            {/* display services */}
            {isSHowAbout && (
              <section className="p-3" style={{ maxHeight: "700px" }}>
                <AboutData />
              </section>
            )}

            {/* display default home data */}
            {isShowDefault && (
              <div>
                <section className="p-3">
                  <h5 className="text-center">Did you know ?</h5>

                  <Table striped="columns" className="rounded border shadow">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Hospitals</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Donors</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Banks</td>
                        <td>1200</td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Saved Lives</td>
                        <td>850</td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Daily Blood Donation</td>
                        <td>100</td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Daily User Registration</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Daily Hospital Registration</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </Table>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
