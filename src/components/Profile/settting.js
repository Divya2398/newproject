import React from "react";
import "./setting.css";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";

const Settting = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="settings">
        <div className="settingscontainer">
          <div className="setting-title">
            <span className="settingsUpdate">Update Your Account</span>
            <span className="settingsDelete">
              Delete Account
              <i class="fa-regular fa-trash-can pro-icon mx-2"></i>
            </span>
          </div>
          <form className="settingForm">
            <label>Profile Picture</label>
            <div className="ppic">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput "
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="divya" name="name" />
            <label>Email</label>
            <input type="email" placeholder="divya@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button
              className="setting-Button btn btn-outline-info border-3 btnstyle"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Settting;
