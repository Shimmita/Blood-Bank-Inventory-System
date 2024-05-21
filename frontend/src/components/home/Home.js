import React, { useState } from "react";
import "../../styles/home.css";
import NavBarMain from "../navbar/NavBar";
import ImageDonateBlood from "../../images/blood_add.webp";
import { Image, Card, Button, Table, Accordion } from "react-bootstrap";
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
function Home() {
  const [isShowDefault, setShowDefault] = useState(true);
  const [isShowQuiz, setShowQuiz] = useState(false);
  const [ishowHelp, setShowHelp] = useState(false);
  const [isShowReports, setShowReport] = useState(false);
  const [ishowCampaigns, setShowCampaigns] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('login')
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleShowCampaigns = () => {
    setShowCampaigns(true);
    setShowReport(false);
    setShowHelp(false);
    setShowQuiz(false);

    setShowDefault(false);
  };
  const handleShowHelp = () => {
    setShowCampaigns(false);
    setShowReport(false);
    setShowHelp(true);
    setShowQuiz(false);

    setShowDefault(false);
  };
  const handleShowQuiz = () => {
    setShowCampaigns(false);
    setShowReport(false);
    setShowHelp(false);
    setShowQuiz(true);

    setShowDefault(false);
  };

  const handleShowReports = () => {
    setShowCampaigns(false);
    setShowReport(true);
    setShowHelp(false);
    setShowQuiz(false);

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
                style={{ paddingRight: "1.5rem", border:'none' }}
              >
                statistics
              </Button>
            </li>

            <li className="sidebar-list-item">
              {" "}
              <Person size={20} className="icon-list" />{" "}
              <Button
                variant="outline-light"
                onClick={handleShowCampaigns}
                style={{ paddingRight: "1rem", border:'none', }}
              >
                campaign
              </Button>
            </li>
            <li className="sidebar-list-item">
              <Question size={25} className="icon-list" />
              <Button
                variant="outline-light"
                onClick={handleShowQuiz}
                style={{ paddingRight: "2rem", border:'none' }}
              >
                chatBot
              </Button>
            </li>
            <li className="sidebar-list-item">
              {" "}
              <Headphones size={20} className="icon-list" />
              <Button
                variant="outline-light"
                onClick={handleShowHelp}
                style={{ paddingRight: "2rem", border:'none'}}
              >
                support
              </Button>
            </li>
          </ul>
        </aside>

        <div
          className="container-content bg-light rounded ms-4"
          style={{  marginTop: "2rem", display: "flex" }}
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
                  <PersonAdd size={50} color="#9198e5"/>
                </div>
                <Card.Body>
                  <Card.Text>
                    Join the lifesaving mission by registering with our Blood
                    Bank Inventory System. Be a vital part of our community
                    committed to making a difference.
                  </Card.Text>
                  <Button variant="outline-dark" onClick={handleRegister} className="w-100">
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
                  <Person size={50} color="#9198e5"/>
                </div>
                <Card.Body>
                  <Card.Text>
                    Login and access vital tools to support the lifesaving
                    mission and be an integral part of our community dedicated
                    to making a difference.
                  </Card.Text>
                  <Button variant="outline-dark" onClick={handleLogin} className="w-100">
                    login
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="container-description" style={{ flex: "2" }}>
          {/* display campigns */}
          {
            ishowCampaigns&&(
              <section className="p-3">
                <Campaigns/>
              </section>
            )
          }

          {/* display the help Component */}
          {ishowHelp &&(
            <section className="p-3">
            <Help/>
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

            {/* display default home data */}
            {isShowDefault && (
              <div>

                <section className="p-3">
                  <h5 className="text-center">statistics</h5>

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
                        <td>Accolades</td>
                        <td>850</td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Daily Blood Donation</td>
                        <td>100</td>
                      </tr>
                    </tbody>
                  </Table>
                </section>

                <section className=" px-3 py-1">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Why Choose Us?</Accordion.Header>
                      <Accordion.Body>
                        Unleash the power of seamless organization, real-time
                        monitoring, and precision in blood inventory management.
                        Delve into an intuitive interface designed to optimize
                        workflow, ensuring swift access to critical information,
                        minimizing errors, and streamlining operations. With our
                        state-of-the-art system, witness a transformative
                        approach to resource allocation, traceability, and donor
                        management, fostering a culture of accountability and
                        reliability. Experience the unmatched benefits of
                        data-driven decision-making, enhanced security
                        protocols, and adaptable scalability, tailored to meet
                        the dynamic needs of modern blood banking.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Why Donate Blood?</Accordion.Header>
                      <Accordion.Body>
                        Be a silent hero—donate blood for both others and your
                        own well-being. Your contribution saves lives and, with
                        regular donation, aids in preventing cardiovascular
                        diseases and iron overload. Moreover, the routine blood
                        screening during donation can serve as an early
                        detection tool, empowering you to control and address
                        potential illnesses promptly. Join a community of
                        selfless individuals, making a lasting impact through
                        this simple yet profound act.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Read More</Accordion.Header>
                      <Accordion.Body>
                        Dive deep into the intricacies of blood donation,
                        explore the latest advancements in transfusion medicine,
                        access detailed statistics on blood types, and discover
                        inspiring stories of donors making a difference. Immerse
                        yourself in a wealth of knowledge, ensuring a heightened
                        understanding of the critical role blood plays in
                        healthcare.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>

    
  );
}

export default Home;
