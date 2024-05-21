import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

function SuccessLoginDoctor() {
  const navigate = useNavigate();

  const handleNavigateDoctorDashBoard = () => {
    navigate("/doctorDashBoard");
  };
  return (
    <div className="d-flex bg-secondary justify-content-center align-items-center vh-100 parent-container">
      <div className='p-5 rounded bg-white w-50" style={{ opacity: ".8" }}'>
        <div className="d-flex justify-content-center">
        <Image src={require('../../images/success.png')} width={100} />

        </div>
        <h2 className="text-success mt-3 mb-3">Login Success</h2>
        <Button
          variant="outline-secondary w-100 mt-5"
          onClick={handleNavigateDoctorDashBoard}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}

export default SuccessLoginDoctor;
