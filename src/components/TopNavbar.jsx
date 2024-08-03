import React from "react";
import { Link, NavLink } from "react-router-dom";

function TopNavbar() {
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
              <Link
                to={"/login"}
                className="btn text-light d-inline-flex justify-content-evenly align-items-center"
              >
                <i className="fa-solid fa-circle-user"></i> &nbsp; LOGIN
              </Link>
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

export default TopNavbar;
