import React, { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { TelephoneFill, Whatsapp } from "react-bootstrap-icons";
import Gmail from "../../../images/gmail.webp";
import axios from "axios";
const SupportDonor = ({ userID, userEmail }) => {
  //extract user ID prop

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmitHelp = (e) => {
    e.preventDefault();
    //post the help message to the server using axios library
    let donor_help_url = `http://localhost:1010/bloodAPI/help/create`;

    axios
      .post(donor_help_url, { email: userEmail, message, donorID: userID })
      .then((res) => {
        setSuccessMessage(
          "message was sent successfully wait for reply from officials by checking notification section"
        );
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setSuccessMessage("");
      });
  };

  return (
    <div className="container bg-light rounded ">
      <section>
        <p className="text-center mb-3 mt-2 fw-bold ">Help and Support </p>
        {successMessage && (
          <div>
            <p className="text-center text-success">{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div>
            <p className="text-center text-danger">{errorMessage}</p>
          </div>
        )}
        <form
          className="mb-2 mx-5  p-4  shadow rounded"
          style={{ maxHeight: "300px" }}
          onSubmit={handleSubmitHelp}
        >
          <textarea
            type="text"
            placeholder="message"
            className="form-control mt-2 p-4"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="link fw-bold"
              type="submit"
              className="mt-3"
            >
              {" "}
              send message
            </Button>
          </div>
        </form>
      </section>
      <hr />
      <section>
        <div>
          <p className="text-center mb-2 fw-bold">Communicate with Us</p>
          <div className="d-flex justify-content-center">
            <Card style={{ width: "25rem", margin: "1rem" }}>
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

            <Card style={{ width: "25rem", margin: "1rem" }}>
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

            <Card style={{ width: "25rem", margin: "1rem" }}>
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
    </div>
  );
};

export default SupportDonor;
