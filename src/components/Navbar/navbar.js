import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";

import "./navbar.css";
const Navbar = () => {
  const PF = "http://localhost:7000/images/";
  const { user, dispatch } = useContext(Context);
  const Logout = async () => {
    console.log("uuid", user.uuid);
    const Admin = user.role;
    try {
      const res = await axios
        .post("http://localhost:7000/v1/user/user-logout?user.uuid")
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            dispatch({ type: "LOGOUT" });
            window.localStorage.clear();
            window.location.href = "/";
          }
        });

      //
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <header className="header navbar-light ">
        <nav className="navbar navbar-expand-lg nav-bg">
          <div className="container ">
            <a className="navbar-brand logo" href="/home">
              Blog<span className="logo-title">ger</span>
            </a>
            <div className="order-lg-2">
              <Link to={"/profile"}>
                <img
                  className="topImg rounded-circle position-relative"
                  src={PF + user.profilepic}
                  alt="profile"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon togicon"></span>
            </button>
            <div
              className="collapse navbar-collapse  p-3"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/write">
                    WRITE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trems">
                    TERMS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    CONTACT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={Logout}>
                    LOGOUT
                  </a>
                </li>
                <Link to={"/admin"}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {user.role === "Admin" && "ADMINBOARD"}
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
