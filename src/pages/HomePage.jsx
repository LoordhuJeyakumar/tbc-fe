import React from "react";
import TopNavbar from "../components/TopNavbar";

import heroImage1 from "../assets/hero-image.jpg";

function HomePage() {
  return (
    <div>
      <TopNavbar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide vh-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={heroImage1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  ">
              <h5 className="heading">PURE BLISS</h5>
              <p>INCENSE FRAGRANCE</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={heroImage1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  ">
              <h5 className="heading">PURE BLISS</h5>
              <p>INCENSE FRAGRANCE</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={heroImage1} className="d-block w-100" alt="..." />
            <div className="carousel-caption  ">
              <h5 className="heading">PURE BLISS</h5>
              <p>INCENSE FRAGRANCE</p>
            </div>
          </div>
        </div>
        {/*  <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}

export default HomePage;
