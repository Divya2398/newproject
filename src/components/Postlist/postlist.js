import React from "react";
import "./postlist.css";
import { Link } from "react-router-dom";

const Postlist = ({ allpost }) => {
  const PF = "http://localhost:7000/images/";
  return (
    <div className="postlist">
      {allpost.photo && (
        <img className="post-img" src={PF + allpost.photo} alt="post image" />
      )}
      <div className="postinfo">
        <div className="postcat">
          <span className="postcat">{allpost.category}</span>
        </div>
        <Link to={`/singlepost/${allpost._id}`} className="linkdec">
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
