import React from "react";
import "./contact.css";

import Navbar from "../Navbar/navbar";

const Contact = () => {
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
                <p className="cont-para">dazzlingshinne@gmail.com</p>
              </div>
            </div>
            <div className="col-6">
              <form className="cont-form">
                <div className="my-3">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="form-control border-3 border-info"
                  ></input>
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control border-3 border-info "
                  ></input>
                </div>
                <div className="my-3">
                  <textarea
                    className="form-control border-3 border-info"
                    placeholder="type your message.."
                    rows={5}
                  ></textarea>
                </div>
                <button className="btn btn-outline-info border-3 w-100">
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
