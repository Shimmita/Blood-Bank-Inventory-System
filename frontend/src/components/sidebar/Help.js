import React, { useState } from "react";
import { Button, Card, Image, Modal } from "react-bootstrap";
import { TelephoneFill, Whatsapp } from "react-bootstrap-icons";
import Gmail from "../../images/gmail.webp";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <section className="p-3">
        <h5 className="text-center mb-3">Find Help and Support </h5>
        <form
          className="mb-2 mx-5  p-2  border rounded"
          style={{ maxHeight: "300px" }}
          onSubmit={(e) => {
            e.preventDefault();
            setShowModal(true)
          }}
        >
          <input
            type="email"
            placeholder="email"
            className="form-control mt-2 p-3"
            required
          />
          <input
            type="text"
            placeholder="message"
            className="form-control mt-2 p-4"
            required
          />
          <Button
            variant="outline-secondary"
            type="submit"
            className="mt-3 w-100"
          >
            {" "}
            submit
          </Button>
        </form>
      </section>
      <section className="p-5">
        <div>
          <h5 className="text-center mb-2">Communicate with Us</h5>
          <div className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                {" "}
                <TelephoneFill size={30} color="green" />
              </div>
              <Card.Body>
                <Card.Text>
                  speak to our customer support team for assistance via phone
                  call.
                </Card.Text>
                <a href="tel:+254757450727">
                  <Button variant="outline-secondary" className="w-100">
                    call
                  </Button>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <Image src={Gmail} width={33} />
              </div>
              <Card.Body>
                <Card.Text>
                  send email to our customer support who reply in shortest time
                  possible.
                </Card.Text>
                <a href={`mailto:shimitadouglas@gmail.com`}>
                  {" "}
                  <Button variant="outline-secondary" className="w-100">
                    email
                  </Button>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <Whatsapp size={25} color="green" className="mb-1" />
              </div>
              <Card.Body>
                <Card.Text>
                  send whatsap message to our customer care support and get
                  feedback.
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={null}
                  className="w-100"
                >
                  whatsapp
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="md"
      >
        <Modal.Body>
          <p className="text-center">
            Please login to send the message
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              navigate("/login");
              setShowModal(false);
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Help;
