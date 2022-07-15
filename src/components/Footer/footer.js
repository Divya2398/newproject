import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-5 footer-bg">
        <div className="d-flex justify-content-around">
          <div>
            <h4 className="footer-logo">
              Blog<span className="sp-logo">ger</span>
            </h4>
            <p className="ft-para">
              we are providing you a platforn to<br></br> Publish your passions
              your way....
            </p>
          </div>
          <div className="d-flex flex-column footer-link">
            <a href="/trems">Trems and Condition</a>
            <a href="/trems">Privacy Policy</a>
            <a href="/contact-us">Contact</a>
            <a href="/home">Home</a>
          </div>
          <div>
            <h4 className="footer-logo">Follow Us</h4>
            <div className="d-flex flex-column align-items-center my-2">
              <i className=" fa-brands fa-facebook-square my-1"></i>
              <i className=" fa-brands fa-instagram-square my-1"></i>
              <i className=" fa-brands fa-twitter-square my-1"></i>
              <i className=" fa-brands fa-pinterest-square my-1"></i>
            </div>
          </div>
          <hr></hr>
        </div>
      </footer>
    </>
  );
};

export default Footer;
