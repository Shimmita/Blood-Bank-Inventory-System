import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <div className="d-flex bg-secondary justify-content-center align-items-center vh-100 parent-container">
      <div className='p-5 rounded bg-white w-50" style={{ opacity: ".8" }}'>
        <div className="d-flex justify-content-center">
        <Image src={require('../../images/error.png')} width={100} />

        </div>
        <h3 className="text-dark mt-3 mb-3"> Oops! Something Went Wrong</h3>
        <Button
          variant="outline-secondary w-100 mt-5"
          onClick={handleNavigateHome}
        >
          Homepage
        </Button>
      </div>
    </div>
  );
}

export default Error404;
