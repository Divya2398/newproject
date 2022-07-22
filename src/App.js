// import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./Context/Context";
// import Login from "./components/User/login";
import Signup from "./components/User/signup";
import Forgot from "./components/User/forgot";
import Resetpassword from "./components/User/resetpassword";
import Login from "./components/User/login";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Sidebar from "./components/Sidebar/sidebar";
import Posts from "./components/Post/post";
import Trems from "./components/Trems/trems";
import Singlepost from "./components/Singlepost/singlepost";
import Createpost from "./components/Createpost/createpost";
import Settting from "./components/Profile/settting";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Popup from "./components/Pop/popup";
import Adminboard from "./components/Admin/Adminboard";

import AdminSidebar from "./components/Admin/Sidebar";
import AdminHeader from "./components/Admin/Header";
import Postdetail from "./components/Admin/Adminpost/postdetail";
import Categorylist from "./components/Admin/Adminpost/Categorylist";
import AddCategory from "./components/Admin/Adminpost/Addcat";
import Reportedpost from "./components/Admin/Adminpost/Reportedpost";
import Activatepost from "./components/Admin/Adminpost/Activatepost";
import Inactivatepost from "./components/Admin/Adminpost/Inactivatepost";
function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        {user ? <Navbar /> : null}
        {/* <Navbar /> */}
        {/* <Link to="/navbar">Navbar</Link> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trems" element={<Trems />} />
          <Route path="/write" element={<Createpost />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/profile" element={<Settting />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route
            path="/password-reset/:id/:token"
            element={<Resetpassword />}
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/singlepost/:_id" element={<Singlepost />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/admin" element={<Adminboard />} />
          <Route path="/adminsidebar" element={<AdminSidebar />} />
          <Route path="/adminheader" element={<AdminHeader />} />
          <Route path="/postdetail" element={<Postdetail />} />
          <Route path="/categorylist" element={<Categorylist />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/reported-post" element={<Reportedpost />} />
          <Route path="/post-active" element={<Activatepost />} />
          <Route path="/post-inactive" element={<Inactivatepost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
