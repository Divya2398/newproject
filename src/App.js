// import logo from "./logo.svg";
// import "./App.css";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/User/login";
import Signup from "./components/User/signup";
import Test from "./components/User/test";
import Forgot from "./components/User/forgot";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Link to="/navbar">Navbar</Link> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/test" element={<Test />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
