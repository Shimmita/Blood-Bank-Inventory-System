import React, { useState } from "react";
import "../../styles/Loginsignup.css";
import { Button, Form } from "react-bootstrap";
import { SkipBackward } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpinnerA from "../Loaders/SpinnerA";
import NavBarMain from "../navbar/NavBar";
import CountiesInKenya from "../../data/Counties";

export default function Register() {
  //use navigate hook to  navigate to the specified route
  const navigate = useNavigate();
  const [showFirst, setShowFast] = useState(true);
  const [showNext, setShowNext] = useState(true);

  const [showLast, setShowLast] = useState(false);
  const [showSubmitButton, setShowSubmit] = useState(false);

  // form data  1
  const [hospitalID, setHospitalID] = useState("");
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //form data 2
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  //define the loading of the spinner

  const [isLoading, setIsLoading] = useState(false);

  //user object for saving the data
  const User = {
    email: email,
    blood: bloodGroup,
    dob: dateOfBirth,
    firstname: firstname,
    lastname: Lastname,
    password: password,
    phone: phone,
    hosID: hospitalID,
    gender: gender,
    role: role,
    county: location,
  };

  const handleSubmitUserRegistration = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      //is loading to true
      setIsLoading(true);
      //the pot url
      const url = "http://localhost:1010/bloodAPI/users/newUser";
      //post the data using the axios library
      axios
        .post(url, { User })
        .then((res) => {
          //set is loading false
          setIsLoading(false);
          console.log(res.data);

          //navigate to the success page
          navigate("/SuccessPage");
        })
        .catch((err) => {
          //set is Loading false
          setIsLoading(false);

          //navigate to the error page
          navigate("/ErrorPage");

          console.log(err);
        });
    }
  };

  const handleHospitalRegistration = () => {
    navigate("/register_hospital");
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
          <div className="container-form">
            {/* show loading spinner if true  */}
            {isLoading && <SpinnerA />}

            {/* show  form if isloading false */}
            {!isLoading && (
              <form className="form" onSubmit={handleSubmitUserRegistration}>
                {/* first */}
                <h5
                  className="text-center fw-bold"
                  style={{ color: "#e66465", fontSize: "medium" }}
                >
                  create account
                </h5>
                {showFirst && (
                  <div>
                    <input
                      className="form-control mb-3"
                      type="email"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      value={firstname}
                      placeholder=" Enter Firstname"
                    />

                    <input
                      className="form-control mb-3"
                      type="text"
                      required
                      value={Lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      min={5}
                      placeholder="Enter Lastname"
                    />
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={5}
                      value={hospitalID}
                      onChange={(e) => setHospitalID(e.target.value)}
                      required
                      placeholder="KMHFL Code"
                    />
                    <input
                      className="form-control mb-3"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email"
                    />

                    <input
                      className="form-control mb-3"
                      type="number"
                      required
                      min={10}
                      value={phone}
                      max={15}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Phone"
                    />

                    <Form.Select
                      aria-label="select county"
                      className="mb-3 mt-3"
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
                  </div>
                )}

                {/* last */}

                {showLast && (
                  <div>
                    <input
                      className="form-control mb-3"
                      type="password"
                      min={6}
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                    />

                    <input
                      className="form-control mb-3"
                      type="password"
                      required
                      min={6}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                    />

                    <input
                      className="form-control"
                      type="text"
                      disabled={true}
                      value={dateOfBirth}
                      placeholder="date of birth"
                    />
                    <input
                      className="form-control"
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />

                    <Form.Select
                      aria-label="select gender"
                      className="mb-3 mt-3"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>

                    <Form.Select
                      aria-label="select role"
                      className="mb-3"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>select role</option>
                      <option value="donor">Donor</option>
                      <option value="doctor">Doctor</option>
                    </Form.Select>

                    <Form.Select
                      aria-label="blood group"
                      className="mb-3"
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                    >
                      <option>select blood group</option>
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
                )}

                {/* button controls */}

                {/* show next if true */}
                {showNext && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outline-secondary"
                      onClick={(e) => {
                        // show last and submit button
                        e.preventDefault();
                        setShowLast(true);
                        setShowSubmit(true);

                        //show not first and next button
                        setShowFast(false);
                        setShowNext(false);
                      }}
                    >
                      {" "}
                      Next
                    </Button>
                  </div>
                )}

                {/* show submit if true */}
                {showSubmitButton && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outline-secondary mx-2"
                      onClick={(e) => {
                        e.preventDefault();
                        // show back first and next button
                        setShowFast(true);
                        setShowNext(true);

                        //false submit and last
                        setShowLast(false);
                        setShowSubmit(false);
                      }}
                    >
                      {" "}
                      <SkipBackward size={20} />
                    </Button>

                    <Button variant="outline-secondary" type="submit">
                      {" "}
                      Submit
                    </Button>
                  </div>
                )}

                <div>
                  <Button
                    onClick={handleHospitalRegistration}
                    variant="light"
                    style={{
                      textDecoration: "none",
                      color: "##9198e5",
                      fontWeight: "bold",
                    }}
                  >
                    register a new hospital
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
