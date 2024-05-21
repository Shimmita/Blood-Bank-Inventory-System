import React, { useState } from "react";
import "../../styles/Loginsignup.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SpinnerA from "../Loaders/SpinnerA";
import NavBarMain from "../navbar/NavBar";
import CountiesInKenya from "../../data/Counties";
import { Form } from "react-bootstrap";

export default function HospitalRegistration() {
  //use navigate hook to  navigate to the specified route
  const navigate = useNavigate();

  // form data  1
  const [hospitalID, setHospitalID] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [hospitalPassword, setPassword] = useState("");
  
  //spinner loader
  const [isLoading, setIsLoading] = useState(false);

  //use effect for form submission in async way
  const handleSubmission = async(e) => {
    //prevent default submission
    e.preventDefault();
    //true is loading

    setIsLoading(true);

    // Check if geolocation is supported by the browser
    if ( navigator.geolocation) {
      // Get current position
     navigator.geolocation.getCurrentPosition(
        // Success callback
        function (position) {
          // Extract latitude and longitude from the position object
          let lat_x = position.coords.latitude;
          let long_y = position.coords.longitude;

          //co-ordunates
          const Hospital = {
            county: hospitalLocation,
            email: email,
            hosID: hospitalID,
            name: hospitalName,
            password: hospitalPassword,
            phone: phone,
            website: website,
            longitude: long_y,
            latitude: lat_x,
          };
        


          //call function to complete posting data to the backend
          const urString = "http://localhost:1010/bloodAPI/hospitals/newHospital";
          axios
            .post(urString, { Hospital })
            .then((response) => {
              //is loading false
              setIsLoading(false);
              //navigate to success page
              navigate("/SuccessPage");

              console.log(response);
            })
            .catch((err) => {
              //is loading false
              setIsLoading(false);
              //navigate to error page
              navigate("/ErrorPage");
              console.log(err);
            });
        },
        // Error callback
        function (error) {
          alert(
            "Error getting location therefore hospital not registered: " +
            error.message
          );
          //set loading false
          setIsLoading(false);
        }
      );
    } else {
      // Geolocation is not supported
      alert("Geolocation is not supported by your browser");
      //set loading false
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex bg-secondary justify-content-center align-items-center vh-100 parent-container">
      <div className="p-5 rounded bg-white w-50" style={{ opacity: ".8" }}>
        <div className="container-main">
          <div className="container-header">
            <div className="container-header mb-5">
              <NavBarMain />
              <hr />
            </div>
          </div>

          {/* show loading if true */}

          {isLoading && <SpinnerA />}

          {/* show form if no loading */}
          {!isLoading && (
            <div className="container-form">
              <form className="form" onSubmit={handleSubmission}>
                {/* first */}
                <h5
                  className="text-center fw-bold"
                  style={{ color: "#e66465", fontSize: "medium" }}
                >
                  hospital registration
                </h5>

                <div>
                  <input
                    className="form-control mb-3"
                    type="number"
                    value={hospitalID}
                    onChange={(e) => setHospitalID(e.target.value)}
                    required
                    placeholder="KMHFL Code"
                  />

                  <input
                    className="form-control mb-3"
                    type="text"
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                    value={hospitalName}
                    placeholder="Hospital Name"
                  />

                  <Form.Select
                    aria-label="select county"
                    className="mb-3 mt-3"
                    value={hospitalLocation}
                    onChange={(e) => setHospitalLocation(e.target.value)}
                  >
                    <option>County</option>
                    {CountiesInKenya.map((county) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))}
                  </Form.Select>
                  <input
                    className="form-control mb-3"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Hospital website URL (optional)"
                  />
                  <input
                    className="form-control mb-3"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Hospital Email"
                  />

                  <input
                    className="form-control mb-3"
                    type="number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Hospital Phone"
                  />

                  <input
                    className="form-control mb-3"
                    type="text"
                    required
                    value={hospitalPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outline-secondary" type="submit">
                    {" "}
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
