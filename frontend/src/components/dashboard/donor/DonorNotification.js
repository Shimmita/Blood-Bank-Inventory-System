import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button, Modal } from "react-bootstrap";
import axios from "axios";

export const DonorNotification = () => {
  const [officialMessages, setOfficialMessage] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [messageDelete,setMessageDelete]=useState('')

  useEffect(() => {
    //fetch the messages of the user from help table
    // Retrieve user ID from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    //set userID  and email for global acces
    // axios request to the server get all userMessages of Help
    axios
      .post(`http://localhost:1010/bloodAPI/help/retrieve/${userData.userID}`)
      .then((response) => {
        console.log(response.data);
        setMyMessages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //axios request get all data from officials
  }, []);

  const handleDeletMessage = async () => {
    setShowModal(false);
    //message is the id param used for deletion
    const delete_notification_route=`http://localhost:1010/bloodAPI/help/delete/${messageDelete}`
    axios.delete(delete_notification_route).then(response=>{
        console.log(response.data)

        //reload
        window.location.reload()
    }).catch(error=>{
        console.log(error)
    })
  };

  return (
    <div className="bg-light rounded ">
      <Row className="py-2 mt-3 ">
        <Col>
          <p className="text-center fw-bold">Messages Sent</p>
          <hr />
          {myMessages.length > 0 ? (
            <Table striped="columns rounded">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {myMessages.length > 0 &&
                  myMessages.map((item, index) => (
                    <tr key={item.donorID}>
                      <td>{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.message}</td>
                      <td>
                        <Button
                          variant="link"
                          onClick={() =>{
                            setMessageDelete(item.message)
                            setShowModal(true)
                          }}
                        >
                          {" "}
                          delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          ) : (
            <div className="text-center">
              <p>no messages available</p>
            </div>
          )}
        </Col>
      </Row>
      <Row className="py-2 mt-3 ">
        <Col>
          <p className="text-center fw-bold">Messages From Officials</p>
          <hr />
          {officialMessages.length > 0 ? (
            <Table striped="columns rounded">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              {/* <tbody>
              {myMessages.length > 0 &&
                myMessages.map((item, index) => (
                  <tr key={item.donorID}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
            </tbody> */}
            </Table>
          ) : (
            <div className="text-center">
              <h6>no messages available</h6>
            </div>
          )}
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="md"
      >
        <Modal.Body>
          <p className="text-center">This message will be permanently deleted</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeletMessage}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
