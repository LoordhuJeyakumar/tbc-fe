import React from "react";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import AppRoutes from "../AppRoutes";
import { Flip, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container-fluid p-0 vh-100  w-100">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
      <AppRoutes />
    </div>
  );
}

export default App;
