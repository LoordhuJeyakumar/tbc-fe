import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const isLocal = false;

const API_URL = isLocal
  ? "http://localhost:3333/api/v1/users/signup"
  : "https://tbc-be-5g49.onrender.com/api/v1/users/";

function SignUP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignupFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(API_URL, {
        name,
        email,
        password,
      });
      console.log(response);
      if (response.status == 201) {
        toast.success(response.data.message);
        setMessage(response.data.message);
        setLoading(false);
        setSuccess(true);
      }
      resetState();
    } catch (error) {
      console.log(error);
      if (error.code == "ERR_NETWORK") {
        toast.error(error.message);
        setError(error.message);
        setLoading(false);
        resetState();
      }
      if (error.response.status == 500) {
        toast.error(error.response.statusText);
        setError(error.response.data.error);
      }

      setError(error.response.data.message);
      toast.error(error.response.data.message);
      resetState();
      setLoading(false);
    }
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 signup">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSignupFormSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="name-input"
                              className="form-control"
                              value={name}
                              required
                              name="name"
                              onChange={handleInputChange}
                              autoComplete="name"
                            />
                            <label className="form-label" htmlFor="name-input">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="email-input"
                              className="form-control"
                              required
                              value={email}
                              name="email"
                              onChange={handleInputChange}
                              autoComplete="email"
                            />
                            <label className="form-label" htmlFor="email-input">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="password-input"
                              className="form-control"
                              value={password}
                              required
                              name="password"
                              onChange={handleInputChange}
                              autoComplete="new-password"
                            />
                            <label
                              className="form-label"
                              htmlFor="password-input"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="confirmPassword-input"
                              className="form-control"
                              value={confirmPassword}
                              required
                              name="confirmPassword"
                              onChange={handleInputChange}
                              autoComplete="confirm-password"
                            />
                            <label
                              className="form-label"
                              htmlFor="confirmPassword-input"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                            name="checkbox"
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                          >
                            Register
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            {loading && (
                              <span className="spinner-border spinner-border-sm ms-2"></span>
                            )}
                          </button>
                        </div>
                        <p className="text-center w-100">
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: "blue" }}>
                            Login
                          </Link>
                        </p>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center justify-content-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                      <div>
                        {/* Show Error message */}
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        {
                          /* show success message */
                          success && (
                            <div className="alert alert-success" role="alert">
                              {message}
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUP;
