import React, { useEffect, useState } from "react";
import {
  Table,
  Col,
  Row,
  Image,
  Button,
  CardBody,
  Card,
  CardText,
  CardTitle,
  Modal,
} from "react-bootstrap";
import { Chat, TelephoneFill } from "react-bootstrap-icons";
import axios from "axios";
import devImage from "../../../images/logo.jpg";

export const DonorAppointments = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [donorDetails, setDonorDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAppointmentHistory = async () => {
      try {
        const userID = JSON.parse(localStorage.getItem("userData")).userID;
        const url = `http://localhost:1010/bloodAPI/appointment/retrieve/${userID}`;
        const response = await axios.post(url);
        setDonorDetails(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointmentHistory();
  }, []);

  const handleRequestAppointment = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const url_create_appointment = `http://localhost:1010/bloodAPI/appointment/create/${userData.userID}`;

    axios
      .post(url_create_appointment)
      .then((res) => {
        setSuccessMessage(res.data.message);
        setErrorMessage("");

        window.location.reload();
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setSuccessMessage("");
      });
  };

  const handleDeleteAppointment = async () => {
    try {
      const userID = JSON.parse(localStorage.getItem("userData")).userID;

      const url_delete_appointment = `http://localhost:1010/bloodAPI/appointment/delete/${userID}`;
      const response = await axios.delete(url_delete_appointment);
      // Remove the deleted appointment from the state
      // setSuccessMessage(response.data.message);
      // setErrorMessage("");

      //reload the window
      console.log(response);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  };

  return (
    <div>
      <Row>
        <Col>
          <hr style={{ color: "white" }} />
          <p className="text-center text-light mt-2 fw-bold">
            Blood Donation Appointments
          </p>
          <p className="mx-3 text-light">Appointment History</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Index</th>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Blood</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {donorDetails.length > 0 &&
                donorDetails.map((donor, index) => (
                  <tr key={donor._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Image
                        src={donor.image || devImage}
                        width={50}
                        style={{
                          borderRadius: "50%",
                          border: "1px solid grey",
                        }}
                      />
                    </td>
                    <td>{donor.name}</td>
                    <td>
                      <TelephoneFill /> {donor.phone}
                    </td>
                    <td>
                      <Chat /> {donor.email}
                    </td>
                    <td>{donor.gender}</td>
                    <td>{donor.blood}</td>
                    <td>
                      <p className="fw-bold text-center rounded">
                        {donor.status ? "Approved" : "Pending"}
                      </p>
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr style={{ color: "white" }} />
          <p className="ms-3 text-light mb-2">Appointment Inquiry</p>
          <Card>
            <CardBody>
              <CardTitle className="text-center">
                How To Make An Appointment
              </CardTitle>
              <CardText>
                Click Request Appointment button below to inquire for an
                appointment at your registered hospital. The status of the
                appointment can be viewed in the appointment history table.
                "Pending" denotes that the request is under consideration,
                "Declined" denotes that the request was rejected finally,
                "Accepted" denotes that the request was accepted, and
                notification will be sent immediately, which can be viewed in
                the "Notification" section. All responses will be sent to the
                Notification section only.
              </CardText>
              <hr />
              {errorMessage && (
                <div>
                  <h6 className="text-center text-danger fw-bold">
                    {errorMessage}
                  </h6>
                  <hr />
                </div>
              )}
              {successMessage && (
                <div>
                  <p className="text-center text-success fw-bold">
                    {successMessage}
                  </p>
                  <hr />
                </div>
              )}
            <div className="d-flex justify-content-center align-items-center">
            <Button
                variant="link"
                onClick={handleRequestAppointment}
              >
                Request Appointment
              </Button>
            </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="md"
      >
        <Modal.Body>
          <p className="text-center">
            This appointment will be deleted from the history and also the
            doctors won't be able to see it.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAppointment}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
