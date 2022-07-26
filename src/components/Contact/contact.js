import React, { useState } from "react";
import "./contact.css";
import Swal from "sweetalert2";
import Navbar from "../Navbar/navbar";
import axios from "axios";

const Contact = () => {
  const [to, setTo] = useState("");
  const [text, setText] = useState("");
  const [Name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:7000/v1/user/contact", {
      to,
      text,
      Name,
    });
    Swal.fire({
      icon: "success",
      title: "Your query has been Submittted to Admin",
      background: "#FFFFFF",
      color: "#00CCFF",
      width: "400px",
      iconColor: "#00CCFF",
      confirmButtonColor: "#00CCFF",
    });
    window.location.reload();
  };
  return (
    <>
      <div className="container my-5">
        <div
          className=" col-lg-10 offset-lg-1 text-white contact-bg p-4"
          id="box"
        >
          <div className="row text-bg p-4">
            <h1 className="text-center text-white cont-title">CONTACT US</h1>
            <p className="text-center cont-para">
              If you have any query or need any help contach us through below
              Email or Phone number
            </p>
            <div className="col-6">
              <div>
                <i class="fa-solid fa-location-dot contact-icon"></i>
                <h2 className="mt-2  text-white">Address</h2>
                <p className="cont-para">
                  No 4, Second Street, koti Nagar, <br /> Pallikaranai, Chennai,
                  <br></br> Tamil Nadu-600100
                </p>
              </div>
              <div>
                <i class="fa-solid fa-phone contact-icon"></i>
                <h2 className="mt-2  text-white">Phone</h2>
                <p>555-123-52525</p>
              </div>
              <div>
                <i class="fa-solid fa-envelope contact-icon"></i>
                <h2 className="mt-2  text-white">Email</h2>
                <p className="cont-para">divya.platosys@gmail.com</p>
              </div>
            </div>
            <div className="col-6">
              <form className="cont-form" onSubmit={handleSubmit}>
                <div className="my-3">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="form-control border-3 border-info"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control border-3 border-info "
                    onChange={(e) => setTo(e.target.value)}
                  ></input>
                </div>
                <div className="my-3">
                  <textarea
                    className="form-control border-3 border-info"
                    placeholder="type your message.."
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-info border-3 w-100"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
