import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  const [data, setData] = useState([]);
  //fetching category from backend using axios
  const getcat = async () => {
    let detail = await axios
      .get("http://localhost:7000/v3/category/all-cat")
      .then((Response) => {
        // console.log(Response.data.result);
        setData(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getcat();
  }, []);

  return (
    <div className="side">
      <div className="side-items">
        <span className="side-title">ABOUT US</span>
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg"
          alt="welcome"
          className=""
        ></img>
        <h3>Welcome To Bloggers, We're Glad and Grateful You're Here...</h3>
        <p>
          Whether sharing your expertise, breaking news, or whatever's on your
          mind, you're in good company on Blogger..
        </p>
        <p>
          we are providing you a platforn to Publish your passions your way.
          Whether you'd like to share your knowledge, experiences or the latest
          news, create a unique and beautiful blog.
        </p>
      </div>
      <div className="side-items">
        <span className="side-title">CATEGORIES</span>

        <ul className="side-list">
          {data.map((value) => {
            return (
              <Link to={`/home/?cat=${value.name}`} className="linkdec">
                <li className="side-list-item">{value.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="side-items">
        <span className="side-title">FOLLOW US</span>
        <div className="side-social">
          <i className="side-icon fa-brands fa-facebook-square"></i>
          <i className="side-icon fa-brands fa-instagram-square"></i>
          <i className="side-icon fa-brands fa-twitter-square"></i>
          <i className="side-icon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
