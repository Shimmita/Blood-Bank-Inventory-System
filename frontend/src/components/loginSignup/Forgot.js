import React, { useState } from "react";
import "../../styles/Loginsignup.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBarMain from "../navbar/NavBar";

export default function Forgot() {
  const navigate = useNavigate();

  //form data
  const [hospitalID, setHospitalID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNavigateSignin = () => {
    navigate("/login");
  };
  return (
    <div className="d-flex bg-secondary justify-content-center align-items-center vh-100 parent-container">
      <div className="p-5 rounded bg-white w-50" style={{ opacity: ".8" }}>
        <div className="container-main">
          <div className="container-header">
            <div className="container-header">
              <div className="container-header mb-5">
                <NavBarMain />
                <hr />
              </div>
            </div>
          </div>
          <div className="container-form">
            <h5
              className="text-center fw-bold"
              style={{ color: "#e66465", fontSize: "medium" }}
            >
              password recovery
            </h5>

            <form className="form">
              <div className="mb-4">
                <input
                  className="form-control"
                  type="text"
                  required
                  value={hospitalID}
                  onChange={(e) => setHospitalID(e.target.value)}
                  min={5}
                  placeholder="Enter Hospital ID"
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" Enter Email"
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  min={5}
                  placeholder="Enter Password"
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  type="password"
                  required
                  min={5}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
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
                  value={"change password"}
                  className="btn btn-light"
                  style={{ color: "#e66465", fontSize: "18px" }}
                />
              </div>
              <div>
                <Button
                  onClick={handleNavigateSignin}
                  variant="link"
                  style={{ textDecoration: "none", color: "#9198e5" }}
                >
                  SignIn
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
