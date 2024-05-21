import React, { useState } from "react";
import "../../styles/Loginsignup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpinnerA from "../Loaders/SpinnerA";
import NavBarMain from "../navbar/NavBar";

export default function StaffLogin() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //form data donor login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  //user object for saving the data
  const User = {
    email: email,
    password: password,
    key: key,
  };

  const url_login_route = "http://localhost:1010/bloodAPI/users/login/official";

  //funtion to handle the login of the doctor
  const handleStaffLogin = (e) => {
    //
    e.preventDefault();
    //set loading to true
    setLoading(true);

    axios
      .post(url_login_route, { User })
      .then((res) => {
        // Save user data in local storage
        localStorage.setItem("userData", JSON.stringify(res.data));
        //setLoading false
        setLoading(false);
        console.log(res.data);
        //navigate to the success page
        console.log(res);
        navigate("/doctorDashBoard");
        //set error message to null
        setErrorMessage("");
      })
      .catch((err) => {
        console.log(err);
        //set loading false
        setLoading(false);
        try {
          //server is reachabe but invalid credentials
          setErrorMessage(err.response.data);
        } catch (er) {
          //server is totally unreachable
          setErrorMessage("server is unreachable");
        }
      });
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
            {/* show error message if present */}
            {errorMessage && (
              <div>
                <hr />
                <h5 className="text-danger text-center">{errorMessage}</h5>
              </div>
            )}
            {/* conditional rendering  if loads showspinner else show the form login */}
            {isLoading ? (
              <SpinnerA />
            ) : (
              <form className="form" onSubmit={handleStaffLogin}>
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    min={5}
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    required
                    placeholder="staff key"
                  />
                </div>

                <div className="mb-4">
                  <input
                    className="form-control"
                    type="email"
                    min={5}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder=" Enter Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="password"
                    min={5}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="submit"
                    value={"Login"}
                    className="btn btn-light"
                    style={{ color: "#e66465", fontSize: "18px" }}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
