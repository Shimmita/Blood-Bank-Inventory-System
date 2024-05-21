import React, { useEffect, useState } from "react";
import { Table, Col, Row, Image, Button, Modal } from "react-bootstrap";
import devImage from "../../../images/logo.jpg";
import { Chat, TelephoneFill } from "react-bootstrap-icons";
import axios from "axios";

export const Appointments = () => {
  const [appointmentData, setDonorDetails] = useState([]);
  const [showModalApprove, setShowModalApprove] = useState(false);
  const [showModalReject, setShowModalReject] = useState(false);

  const [appointmentID, setAppointmentID] = useState("");

  useEffect(() => {
    const hosID = JSON.parse(localStorage.getItem("userData")).hosID;

    const url_donor_appointments = `http://localhost:1010/bloodAPI/appointment/retrieve/doctor/${hosID}`;

    axios
      .post(url_donor_appointments)
      .then((response) => {
        console.log(response.data);
        setDonorDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const handleModalReject = async () => {
    //const url
    const state = "reject";
    const url_reject = `http://localhost:1010/bloodAPI/appointment/update/${appointmentID}`;

    axios
      .patch(url_reject, { state: state })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShowModalReject(false);
  };

  const handleModalApprove = async () => {
    const state = "approve";
    const url_approve = `http://localhost:1010/bloodAPI/appointment/update/${appointmentID}`;

    axios
      .patch(url_approve, { state: state })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShowModalApprove(false);
  };

  return (
    <div>
      <Row>
        <Col>
          <hr style={{ color: "white" }} />
          <p className="text-center text-light mt-2 fw-bold">
            Blood Donation Apppointments
          </p>
          <hr style={{ color: "white" }} />

          <Table striped="columns">
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Blood</th>
                <th>County</th>
                <th>Status</th>
                <th>action 1</th>
                <th>action 2</th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.length > 0 &&
                appointmentData.map((appointment, index) => (
                  <tr key={appointment.email}>
                    <td>{index + 1}</td>
                    <td>{appointment.name}</td>
                    <td>
                      {" "}
                      <TelephoneFill /> {appointment.phone}
                    </td>
                    <td>
                      <Chat /> {appointment.email}
                    </td>
                    <td>{appointment.gender}</td>
                    <td>{appointment.blood}</td>
                    <td>{appointment.county}</td>
                    {appointment.status==='approved' && (<th className="text-center text-success fw-bold">{appointment.status}</th>)}
                    {appointment.status==='rejected' && (<th className="text-center text-danger fw-bold">{appointment.status}</th>)}
                    {appointment.status==='pending' && (<th className="text-center text-info fw-bold">{appointment.status}</th>)}
                    <td>
                      <Button
                        variant="link text-success fw-bold"
                        onClick={() => {
                          setShowModalApprove(true);
                          setAppointmentID(appointment.appointmentID);
                        }}
                      >
                        approve
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="link text-danger fw-bold"
                        onClick={() => {
                          setShowModalReject(true);
                          setAppointmentID(appointment.appointmentID);
                        }}
                      >
                        reject
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal
        show={showModalApprove}
        onHide={() => setShowModalApprove(false)}
        centered
        size="md"
      >
        <Modal.Body>
          <p className="text-center">
            sender will be notified that appointment was approved
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModalApprove(false)}
          >
            Cancel
          </Button>
          <Button variant="success" onClick={handleModalApprove}>
            proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModalReject}
        onHide={() => setShowModalReject(false)}
        centered
        size="md"
      >
        <Modal.Body>
          <p className="text-center">
            sender will be notified that appointment was rejected
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalReject(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleModalReject}>
            proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
