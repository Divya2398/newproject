import React, { useContext, useState } from "react";
import "./setting.css";
import Sidebar from "../Sidebar/sidebar";

import axios from "axios";
import { Context } from "../../Context/Context";
import { Alert } from "antd";

const Settting = () => {
  const PF = "http://localhost:7000/images/";
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [Name, setName] = useState(user.Name);
  const [UserName, setUserName] = useState("");

  // console.log(user._id);

  //update profile
  const handleupdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updated = {
      _id: user._id,
      Name,
    };
    // console.log(user._id);
    if (file) {
      const formdata = new FormData();
      const filename = user.uuid + file.name;
      formdata.append("name", filename);
      formdata.append("file", file);
      updated.profilepic = filename;
      try {
        await axios.post("http://localhost:7000/api/upload/", formdata);
      } catch (error) {
        console.log(error.message);
      }
    }
    // if (UserName) {
    //   updated.UserName = UserName;
    // }
    try {
      const res = await axios
        .put(`http://localhost:7000/v1/user/update/${user._id}`, updated)
        .then((response) => {
          console.log(response.data.status);

          if (response.data.status === "success") {
            // console.log(res.data.result);
            dispatch({ type: "UPDATE_SUCCESS", payload: response.data.result });
            alert("profile updated");
          }
        });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  //delete profile
  const handledelete = async () => {
    const del = axios
      .delete(`http://localhost:7000/v1/user/delete-account/${user.uuid}`)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("your account  deleted successfully");
          dispatch({ type: "DELETE" });
          window.localStorage.clear();
          window.location.href = "/";
        }
      });
  };
  return (
    <>
      <div className="settings">
        <div className="settingscontainer">
          <div className="setting-title">
            <span className="settingsUpdate">Update Your Account</span>

            <span className="settingsDelete">
              Delete Account
              <i
                class="fa-regular fa-trash-can pro-icon mx-2"
                onClick={handledelete}
              ></i>
            </span>
          </div>
          <form className="settingForm" onSubmit={handleupdate}>
            <label>Profile Picture</label>

            <div className="ppic">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilepic}
                alt="profilepic"
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput "
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>Name</label>
            <input
              type="text"
              placeholder={user.Name}
              name=" Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Username</label>
            <input
              type="text"
              placeholder={user.UserName}
              name="name"
              value={UserName}
              disabled
              // onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder={user.Email}
              name="email"
              disabled
            />

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
