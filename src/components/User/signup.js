import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";

const Signup = () => {
  //form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  // const onSubmit = (details) => {
  //   console.log(details);
  // };

  //input state
  const navigate = useNavigate();
  const [Name, setName] = useState();
  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Mobilenumber, setMobilenumber] = useState();
  const [password, setpassword] = useState();

  const savedetails = (details) => {
    console.log(details);
    details.profilepic = "avatar.jpg";
    axios
      .post(
        "http://localhost:7000/v1/user/user-signup",
        // Name,
        // UserName,
        // Email,
        // Mobilenumber,
        // password,
        details
      )
      .then((Response) => {
        console.log(Response.data.status);
        if (Response.data.status === "failure") {
          alert(Response.data.message);
        } else {
          alert("Registration is successfully completed");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mb-3 mt-4 ">
      <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4 border">
        <h2 className="text-center ">Signup</h2>
        <p className="text-start mt-3">
          Please fill in this form to create an account. or
          <a href="" onClick={() => navigate("/")}>
            Login
          </a>
        </p>
        <form onSubmit={handleSubmit(savedetails)}>
          <div className="mb-3 mt-3 ">
            <label htmlFor="FirstName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              {...register("Name", {
                required: "Name is Required",
                pattern: {
                  value: /^[A-Z][a-zA-Z '.-]*$/,
                  message:
                    "Only alphabets are allowed and your name should start with  capital letter",
                },
                minLength: {
                  value: 3,
                  message: "your name should have atleast 3 character",
                },
                maxLength: {
                  value: 30,
                  message: "maximum 30 characters are only allowed",
                },
              })}
              onKeyUp={() => {
                trigger("Name");
              }}
            />
            {errors.Name && (
              <small className="text-danger">{errors.Name.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              name="UserName"
              placeholder="Enter UserName"
              onChange={(e) => setUserName(e.target.value)}
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
            <label htmlFor="emailid" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              {...register("Email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    "enter valid email (example : samplemail@example.com)",
                },
              })}
              onKeyUp={() => {
                trigger("Email");
              }}
            />
            {errors.Email && (
              <small className="text-danger">{errors.Email.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Mobilenumber" className="form-label">
              PhoneNumber:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter PhoneNumber"
              name="Mobilenumber"
              onChange={(e) => setMobilenumber(e.target.value)}
              {...register("Mobilenumber", {
                required: "Mobilenumber is Required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "only numbers are allowed.Enter valid mobile number",
                },
                maxLength: {
                  value: 10,
                  message: "Not more than 10 numbers are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("Mobilenumber");
              }}
            />
            {errors.Mobilenumber && (
              <small className="text-danger">
                {errors.Mobilenumber.message}
              </small>
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
              onChange={(e) => setpassword(e.target.value)}
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
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <p>
            By creating an account you agree to our &nbsp;
            <a href="#">Terms &amp; Privacy</a>.
          </p>
          <div className="text-center">
            <button
              type="submit"
              name="sign-up"
              className="btn btn-outline-success w-100"
              // onClick={savedetails}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
