import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const isLocal = false;

const API_URL = isLocal
  ? "http://localhost:3333/api/v1/users/signup"
  : "https://tbc-be-5g49.onrender.com/api/v1/users/";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const hnadleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "loginEmail") {
      setEmail(value);
    } else if (name === "loginPassword") {
      setPassword(value);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(API_URL, {
        email,
        password,
      });
      console.log(response);
      if (response.status == 200) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data.loggedInUser)
        );

        setMessage(response.data.message);
        setSuccess(true);
        setLoading(false);
        resetState();
        navigate("/redirect");
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
      resetState();
    }
  };

  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <section className="">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
              </div>
              <div>
                {success && (
                  <div className="alert alert-success" role="alert">
                    {message}
                  </div>
                )}
              </div>
              <form onSubmit={handleLoginSubmit}>
                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div> */}

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="login-email-input"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    required
                    autoComplete="email"
                    value={email}
                    name="loginEmail"
                    onChange={hnadleInputChange}
                  />
                  <label className="form-label" htmlFor="login-email-input">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="password"
                    id="login-password-input"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required
                    autoComplete="password"
                    value={password}
                    name="loginPassword"
                    onChange={hnadleInputChange}
                  />
                  <label className="form-label" htmlFor="login-password-input">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <Link to={"/reset-password"}>Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                    <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    {loading && (
                      <span className="spinner-border spinner-border-sm ms-2"></span>
                    )}
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to={"/signup"} className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
