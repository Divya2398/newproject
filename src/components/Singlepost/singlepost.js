import React, { useEffect, useState } from "react";
import "./single.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";

const Singlepost = () => {
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname.split("/")[2]);
  const path_uuid = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchpost = async () => {
      const getpost = await axios.get(
        "http://localhost:7000/v2/postApi/single-post/" + path_uuid
      );
      console.log("detail", getpost.data.result);
      setPost(getpost.data.result);
    };
    fetchpost();
  }, [path_uuid]);
  return (
    <>
      <div class="row">
        <div class="col-9 ">
          <div className="singlepost-Wrap">
            {post.photo && (
              <img
                src={post.photo}
                alt="post image"
                className="w-100 spost-img"
              />
            )}
            <h1 className="text-center spost-title">
              {post.title}
              <div className="spost-edit">
                <i class="fa-regular fa-pen-to-square spost-icon"></i>
                <i class="fa-regular fa-trash-can spost-icon"></i>
                <button className="spost-report btn btn-outline-info">
                  Report
                </button>
              </div>
            </h1>
            <div className="singlepost-info">
              <Link to={`/home/?UserName=${post.UserName}`} className="linkdec">
                <span className="post-author">
                  Author : <strong>{post.UserName}</strong>
                </span>
              </Link>
              <span className="post-time">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            <p className="spost-decp">{post.desc}</p>
          </div>
        </div>
        <div class="col-3">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
};

export default Singlepost;
