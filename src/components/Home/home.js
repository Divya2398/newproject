import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Posts from "../Post/post";
import Sidebar from "../Sidebar/sidebar";
import Footer from "../Footer/footer";
import "./home.css";

const Home = () => {
  const [post, setPost] = useState([]);
  const { search } = useLocation();
  console.log(search);
  useEffect(() => {
    const getposts = async () => {
      const detail = await axios.get(
        "http://localhost:7000/v2/postApi/all-post" + search
      );
      // console.log("posts", detail.data.result);
      setPost(detail.data.result);
    };
    getposts();
  }, [search]);
  // console.log("post", post);
  return (
    <>
      <div className="container-fluid ">
        <div
          id="demo"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).webp"
                alt="Chicago"
                className="d-block image w-100 h-100"
              />
              <div className="carousel-caption mb-3">
                <p>
                  There's a lot of information out there for free, so you've got
                  to figure out what makes your information different.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp"
                alt="Camera"
                className="d-block image w-100 h-100"
              />

              <div className="carousel-caption mb-3">
                <p>Good food never fails in bringing people together.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp"
                alt="Camera"
                className="d-block image w-100 h-100"
              />
              <div className="carousel-caption mb-3">
                <p>
                  Successful blogging is not about one time hits. It's about
                  building a loyal following over time.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <div className="d-flex p-3">
          <Posts posts={post}></Posts>
          <Sidebar />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
