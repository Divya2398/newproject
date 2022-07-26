import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./comment.css";
import axios from "axios";

const Comment = ({ own }) => {
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    const fetchcmt = async () => {
      const getpost = await axios.get("http://localhost:7000/v4/comments/");
    };
    fetchcmt();
  }, []);
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageimg"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp"
            alt="profile"
          />
          <p className="message-text">
            <span className="user-cmt">@divya</span>
            <br />
            no-unused-vars Line 84:11: The href attribute requires a valid value
          </p>
        </div>
        <div className="message-bottom">1 hour ago</div>
      </div>
    </>
  );
};

export default Comment;
