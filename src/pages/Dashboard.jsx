import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div>
        <DashBoardNavbar />
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1 className="text-light">Welcome! {user.name}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
