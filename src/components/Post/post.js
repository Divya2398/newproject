import React from "react";
import "./post.css";
import Postlist from "../Postlist/postlist";

const Posts = ({ posts }) => {
  // console.log(posts);
  return (
    <div className="post">
      {posts.map((p) => (
        <Postlist allpost={p} />
      ))}
    </div>
  );
};

export default Posts;
