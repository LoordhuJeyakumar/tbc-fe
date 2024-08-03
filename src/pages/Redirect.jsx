import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();

  console.log(localStorage);
  const { accessToken, user } = localStorage;
  const userDetails = JSON.parse(user);
  console.log(userDetails);

  useEffect(() => {
    handleRedirect();
  }, []);

  const handleRedirect = () => {
    if (accessToken) {
      setTimeout(() => {
        if (userDetails?.isAdmin) {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 3000);
    }
  };
  return (
    <div className="d-flex flex-column pt-5 align-items-center justify-content-center vh-100">
      <div className="pb-2 mb-5">
        <div className="">
          <span className="h1">Welcome! {userDetails?.name},</span>{" "}
          <h2 className="h2">Just a moment...</h2>
        </div>

        <p className="">
          We're redirecting you to your dashboard... Not working?{" "}
          <button className="btn btn-warning" onClick={handleRedirect}>
            Click here
          </button>
        </p>
      </div>
      <div className=" mb-4">
        <lord-icon
          src="https://cdn.lordicon.com/spjdafms.json"
          trigger="loop"
          state="loop-walking"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
      </div>
      <div className="slider top-50 pt-5" style={{ marginTop: "10.8rem" }}>
        <div className="line"></div>
        <div className="break dot1"></div>
        <div className="break dot2"></div>
        <div className="break dot3"></div>
      </div>
    </div>
  );
}

export default Redirect;
