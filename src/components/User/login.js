import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
// import jwt from "jwt-decode";
// import "./style.css";
// import { useForm } from "react-hook-form";
import { Context } from "../../Context/Context";

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("flase");
  // const [UserName, savedUserName] = useState();
  // const [password, savedpassword] = useState();

  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:7000/v1/user/user-login", {
        UserName: userRef.current.value,
        password: passwordRef.current.value,
      });

      // console.log("status", res.data.status);

      if (res.data.status === "success") {
        // console.log(res.data.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.data,
        });
        Swal.fire({
          icon: "success",
          text: "Logged in Successfully",
          background: "#FFFFFF",
          color: "#00CCFF",
          width: "300px",
          fontsize: "30px",
          iconColor: "#00CCFF",
          confirmButtonColor: "#00CCFF",
        });
        // alert("Logged in successfully");
        if (res.data.data.role === "Admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        let ermsg = res.data.message;
        Swal.fire({
          icon: "error",
          text: ermsg,
          background: "#FFFFFF",
          color: "#00CCFF",
          width: "300px",
          fontsize: "30px",
          iconColor: "#00CCFF",
          confirmButtonColor: "#00CCFF",
        });
        // alert(res.data.message);
      }
    } catch (error) {
      let catermsg = error.response.data.message;
      dispatch({ type: "LOGIN_FAILURE" });
      Swal.fire({
        icon: "error",
        text: catermsg,
        background: "#FFFFFF",
        color: "#00CCFF",
        width: "300px",
        fontsize: "30px",
        iconColor: "#00CCFF",
        confirmButtonColor: "#00CCFF",
      });
      // alert(error.response.data.message);
      console.log(error);
    }
  };
  //     .then(async (Response) => {
  //       const setdata = Response.data.data.loginStatus;
  //       // console.log(Response.data.data);
  //       if (Response.data.status === "failure") {
  //         alert(Response.data.message);
  //       } else {
  //         // console.log(Response.data.data);
  //         console.log("success");
  //         const userdetail = await dispatch({
  //           type: "LOGIN_SUCCESS",
  //           payload: Response.data.data,
  //         });
  //         console.log("userdetail", userdetail);
  //         alert("Logged in successfully");
  //         navigate("/home");
  //       }
  //       setStatus(setdata);
  //     })
  //     .catch((error) => {
  //       dispatch({ type: "LOGIN_FAILURE" });
  //       console.log(error);
  //     });
  // };
  console.log(isFetching);
  console.log("user ---", user);
  return (
    <div className="container my-5 ">
      <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border border-info border-3">
        <h2 className="text-center">LOGIN</h2>
        <p>
          Already have an account? Login in or
          <a href="" onClick={() => navigate("/signup")}>
            SignUp
          </a>
        </p>

        <form onSubmit={handlesubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="UserName"
              name="UserName"
              ref={userRef}
              // onChange={(e) => savedUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              // onChange={(e) => savedpassword(e.target.value)}
              ref={passwordRef}
            />
          </div>

          <p>
            By creating an account you agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center ">
            <button
              type="submit"
              className="btn btn-outline-info w-100 btnstyle"
              // onClick={getdetails}
            >
              Login
            </button>
            <Link to="/forgot-password">
              <p className="mb-3 mt-3">Forgot password ?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
