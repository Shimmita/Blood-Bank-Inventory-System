import React, { useState } from "react";
import "../../styles/Loginsignup.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SpinnerA from "../Loaders/SpinnerA";
import NavBarMain from "../navbar/NavBar";

export default function Login() {
axios.defaults.withCredentials=false;

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //form data donor login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle navigate to the registration
  const handleRegister = () => {
    navigate("/register");
  };

  //fun handles forgot pasword navigate
  const handleNavigateForgotPassword = () => {
    navigate("/forgot");
  };
  //user object for saving the data
  const User = {
    email: email,
    password: password,
  };

  const url_login_route = "http://localhost:1010/bloodAPI/users/login";

  //fun to handle registstration on submission
  const handleUserLogin = (e) => {
    //prevent default form submission
    e.preventDefault();

    //set loading to true
    setLoading(true);

    axios
      .post(url_login_route, { User })
      .then((res) => {
        //save the daata 
          // Save user data in local storage
      localStorage.setItem('userData', JSON.stringify(res.data));

      // Save user data in cookies
      // Cookies.set('userData', JSON.stringify(res.data) ,{ expires: 1 });
       
        //setLoading false
        setLoading(false);
        //navigate to the success page
        console.log(res);
        navigate("/donorDashBoard");

        //set error message to null
        setErrorMessage('')
      
      })
      .catch((err) => {
        console.log(err);
        //set loading false
        setLoading(false);
        //navigate to the error page
        try {
          //server is reachabe but invalid credentials
          setErrorMessage(err.response.data);
        } catch (er) {
          //server is totally unreachable 
          setErrorMessage("server is unreachable");
        }
      });
  };

  const handleNavigateStaffLogin = () => {
    //
    navigate("/loginStaff");
  };

  return (
    <div className="d-flex bg-secondary justify-content-center align-items-center vh-100 parent-container">
      <div className="p-5 rounded bg-white w-50" style={{ opacity: ".8" }}>
        <div className="container-main">
          <div className="container-header mb-5">
            <NavBarMain />
           
            {/* show error mesage */}
            {errorMessage && (
              <div>
                 <hr />
                <h5 className="text-danger text-center">{errorMessage}</h5>
              </div>
            )}
            <hr />
          </div>

          <div className="container-form">
            {/* conditional rendering show form if no loading else show the the loader */}
            {isLoading ? (
              <SpinnerA />
            ) : (
              <form className="form" onSubmit={handleUserLogin}>
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

                <div>
                  <Button onClick={handleNavigateStaffLogin} variant="link">
                    Doctor Login
                  </Button>

                  <Button onClick={handleRegister} variant="link">
                    Create Account
                  </Button>

                  <Button variant="link" onClick={handleNavigateForgotPassword}>
                    Forgot Password
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
