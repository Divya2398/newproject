import React, { useState, useEffect } from "react";
import { Router, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate = useNavigate();
  const [status, setStatus] = useState("flase");
  const [UserName, savedUserName] = useState();
  const [password, savedpassword] = useState();

  const getdetails = async (details) => {
    console.log(details);
    const get = await axios
      .post(
        "http://localhost:7000/v1/user/user-login",
        details
        // UserName,
        // password,
      )
      .then((Response) => {
        const setdata = Response.data.data.loginStatus;
        console.log(Response.data.data);
        alert("successfully loggedIn");
        setStatus(setdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container my-5 ">
      <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border">
        <h2 className="text-center">Login</h2>
        <p>
          Already have an account? Login in or
          <a href="" onClick={() => navigate("/signup")}>
            SignUp
          </a>
        </p>

        <form onSubmit={handleSubmit(getdetails)}>
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
              onChange={(e) => savedUserName(e.target.value)}
              {...register("UserName", {
                required: "Username is Required",
                pattern: {
                  value: /^[a-zA-Z0-9#?!@$%^&*-]*$/,
                  message: "username can be as per your wish",
                },
                minLength: {
                  value: 3,
                  message: "username should have atleast 3 character",
                },
                maxLength: {
                  value: 20,
                  message: "maximum 20 characters are only allowed",
                },
              })}
              onKeyUp={() => {
                trigger("UserName");
              }}
            />
            {errors.UserName && (
              <small className="text-danger">{errors.UserName.message}</small>
            )}
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
              onChange={(e) => savedpassword(e.target.value)}
              {...register("password", {
                required: "password is Required",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "password must have 8 characters and should include: At least one upper case  / At least one lower case  / At least one Number / At least one special character",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            />
          </div>
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
          <p>
            By creating an account you agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center ">
            <button
              type="submit"
              className="btn btn-outline-success w-100 btnstyle"
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
