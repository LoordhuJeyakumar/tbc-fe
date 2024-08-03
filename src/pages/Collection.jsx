import React from "react";
import TopNavbar from "../components/TopNavbar";

function Collection() {
  return (
    <div>
      <div>
        <TopNavbar />
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-light">Collection</h1>
      </div>
    </div>
  );
}

export default Collection;
