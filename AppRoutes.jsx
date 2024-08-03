import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import SignupAndLoginPage from "./src/pages/SignupAndLoginPage";
import Login from "./src/pages/Login";
import SignUP from "./src/pages/SignUP";
import Shop from "./src/pages/Shop";
import Craft from "./src/pages/Craft";
import Collection from "./src/pages/Collection";
import Contact from "./src/pages/Contact";
import AccountVerification from "./src/pages/AccountVerification";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/users/:userId/:verifyToken"
          element={<AccountVerification />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
