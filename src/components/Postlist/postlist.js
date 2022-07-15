import React from "react";
import "./postlist.css";
import { Link } from "react-router-dom";

const Postlist = ({ allpost }) => {
  return (
    <div className="postlist">
      <img
        className="post-img"
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
        alt="post image"
      ></img>
      <div className="postinfo">
        <div className="postcat">
          <span className="postcat">{allpost.category}</span>
        </div>
        <Link to={`/singlepost/${allpost.uuid}`} className="linkdec">
          <span className="posttitle">{allpost.title}</span>
        </Link>

        <span className="postdate">
          {new Date(allpost.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{allpost.desc}</p>
    </div>
  );
};

export default Postlist;
