import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function DashBoardNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="navbar-box fixed-top ">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/shop"}>
                  SHOP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/craft"}>
                  CRAFTMANSHIP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/collection"}>
                  COLLECTION
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="call-to-action">
              <button
                onClick={handleLogout}
                className="btn text-light d-inline-flex justify-content-evenly align-items-center"
              >
                <i class="fa-solid fa-right-from-bracket"></i> &nbsp; LOGOUT
              </button>
              <button className="btn text-light d-inline-flex justify-content-evenly align-items-center">
                <i className="fa-solid fa-basket-shopping"></i> &nbsp;CART
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashBoardNavbar;
