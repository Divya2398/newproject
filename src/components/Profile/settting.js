import React, { useContext, useState, useEffect } from "react";
import "./setting.css";
import Sidebar from "../Sidebar/sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../Context/Context";
// import { Alert } from "antd";
// import swal from "sweetalert";
import Swal from "sweetalert2";
const Settting = () => {
  const PF = "http://localhost:7000/images/";
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [Name, setName] = useState(user.Name);
  const [UserName, setUserName] = useState("");
  const [postdata, setpostData] = useState([]);
  const [show, setShow] = useState(false);

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
            // swal({
            //   title: "Your Profile Updated!",
            //   icon: "success",
            //   className: "swal-style",
            // });

            Swal.fire({
              icon: "success",
              text: "Profile Updated Successfully",
              background: "#FFFFFF",
              color: "#00CCFF",
              width: "300px",
              fontsize: "30px",
              iconColor: "#00CCFF",
              confirmButtonColor: "#00CCFF",
            });
          }
        });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  //delete profile
  const handledelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete your post!",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d40000",
      confirmButtonText: "Yes, Delete it!",
      background: "#FFFFFF",
      color: "#00CCFF",
      width: "300px",

      iconColor: "#00CCFF",
      confirmButtonColor: "#00CCFF",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const remove = await axios;
        const del = axios
          .delete(`http://localhost:7000/v1/user/delete-account/${user.uuid}`)
          .then((response) => {
            console.log(response);
            if (response.data.status === "success") {
              Swal.fire({
                icon: "success",
                title: "Account Deleted",
                background: "#FFFFFF",
                color: "#00CCFF",
                width: "300px",
                iconColor: "#00CCFF",
                confirmButtonColor: "#00CCFF",
              });
              // alert("your account  deleted successfully");
              dispatch({ type: "DELETE" });
              window.localStorage.clear();
              window.location.href = "/";
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };
  const getpost = async () => {
    let data = await axios
      .get(`http://localhost:7000/v2/postApi/post-user/${user.UserName}`)
      .then((Response) => {
        console.log(Response.data.status);
        if (Response.data.status === "success") {
          setShow(true);
          setpostData(Response.data.result);
        } else {
          setShow(false);
        }

        // console.log(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getpost();
  }, []);
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
            <label className="profile-text">Profile Picture</label>

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
            <label className="profile-text">Name</label>
            <input
              type="text"
              placeholder={user.Name}
              name=" Name"
              value={Name}
              className="profile-input"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="profile-text">Username</label>
            <input
              type="text"
              placeholder={user.UserName}
              name="name"
              value={UserName}
              className="profile-input"
              disabled
              // onChange={(e) => setUserName(e.target.value)}
            />
            <label className="profile-text">Email</label>
            <input
              type="email"
              placeholder={user.Email}
              name="email"
              className="profile-input"
              disabled
            />

            <button
              className="setting-Button btn btn-outline-info border-3 btnstyle"
              type="submit"
            >
              Update
            </button>
          </form>
          {setShow ? (
            <div className="mt-5 border border-3 w-100 p-3 user-post-cont">
              {postdata.map((p) => {
                return (
                  <div className="card user-post border border-info">
                    {p.photo && (
                      <img
                        className="user-post-img"
                        src={PF + p.photo}
                        alt="post image"
                      />
                    )}
                    <Link to={`/singlepost/${p._id}`} className="linkdec">
                      <div className="card-body">
                        <h5 className="card-title single-post-title">
                          {p.title}
                        </h5>
                        <span className="post-user-date">
                          Posted On : {new Date(p.createdAt).toDateString()}
                        </span>
                        <p className="card-text single-post-desc">{p.desc}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-5">
              <h3 className="no-post-st">
                No post Yet,publish your own creativity...
              </h3>
            </div>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Settting;
