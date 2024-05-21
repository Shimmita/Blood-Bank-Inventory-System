import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/loginSignup/Login";
import Forgot from "./components/loginSignup/Forgot";
import Register from "./components/loginSignup/Register";
import Home from "./components/home/Home";
import Services from "./components/menu-header/Services";
import Hospital from "./components/menu-header/Hospital";
import About from "./components/menu-header/About";
import HospitalRegistration from "./components/loginSignup/HospitalReg";
import Error404 from "./components/Error/404Page";
import SuccessPage from "./components/success/SuccessRegistration";
import BloodBankDashBoard from "./components/dashboard/admin/BloodBankDashBoard";
import DonorDashBoard from "./components/dashboard/donor/DonorDashBoard";
import SuccessLoginDonor from "./components/success/SuccesLoginDonor";
import StaffLogin from "./components/loginSignup/DoctorLogin";
import SuccessLoginDoctor from "./components/success/SuccessLoginDoctor";
const App = () => {
 
  
  return (
    <div className="fw-bold">

    <BrowserRouter>
      <Routes>
b        <Route exact path="/" element={<Home/>} />
b        <Route exact path="/doctorDashBoard" element={<BloodBankDashBoard/>} />
        <Route exact path="/donorDashBoard" element={<DonorDashBoard/>} />
        <Route exact path="/ErrorPage" element={<Error404/>} />
        <Route exact path="/SuccessPage" element={<SuccessPage/>} />
        <Route exact path="/SuccessLoginDonor" element={<SuccessLoginDonor/>} />
        <Route exact path="/SuccessLoginDoctor" element={<SuccessLoginDoctor/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/register_hospital" element={<HospitalRegistration />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/hospitals" element={<Hospital />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/loginStaff" element={<StaffLogin />} />
      </Routes>
    </BrowserRouter>
    </div>
 
  );
};

export default App;
