import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Verified() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center   ">
      <div className="p-3 w-50 d-flex align-items-center">
        <h1 className="Verifying fw-bolder text-start text-warning">
          Verification Success
        </h1>
        <lord-icon
          src="https://cdn.lordicon.com/guqkthkk.json"
          trigger="loop"
          delay="1500"
          state="in-reveal"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </div>

      <div className="redirectBox p-3 w-50">
        <h1 className="fw-bold">Just a moment...</h1>
        <div className="slider mt-1">
          <div className="line"></div>
          <div className="break dot1"></div>
          <div className="break dot2"></div>
          <div className="break dot3"></div>
        </div>
        <p className="p-0 mt-4">
          We're redirecting you to our login page... <br />
          If not working?{" "}
          <button
            onClick={() => navigate("/login")}
            className=" px-3 my-3 btn btn-warning btn-rounded btn-lg"
          >
            Click here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Verified;
