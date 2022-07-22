import React, { useEffect, useState, useContext } from "react";
import "./single.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar/sidebar";
import { Context } from "../../Context/Context";

const Singlepost = () => {
  const PF = "http://localhost:7000/images/";
  const location = useLocation();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  // console.log(location);
  // console.log(location.pathname.split("/")[2]);
  const path_id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [updatemode, setUpdatemode] = useState(false);
  const [catdata, setCatdata] = useState([]);

  //category input
  const getcat = async () => {
    let data = await axios
      .get("http://localhost:7000/v3/category/all-cat")
      .then((Response) => {
        // console.log(Response.data.result);
        setCatdata(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getcat();
  }, []);
  //get single post
  useEffect(() => {
    const fetchpost = async () => {
      const getpost = await axios.get(
        "http://localhost:7000/v2/postApi/single-post/" + path_id
      );
      console.log("detail", getpost.data.result);
      setPost(getpost.data.result);
      setTitle(getpost.data.result.title);
      setDesc(getpost.data.result.desc);
      setCategory(getpost.data.result.category);
    };
    fetchpost();
  }, [path_id]);

  //delete post
  const handledelete = async () => {
    const remove = await axios
      .delete("http://localhost:7000/v2/postApi/delete-post/" + path_id, {
        data: { UserName: user.UserName },
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //update
  const handleupdate = async () => {
    const Update = await axios
      .put("http://localhost:7000/v2/postApi/update-post/" + path_id, {
        UserName: user.UserName,
        title,
        desc,
        category,
      })
      .then((res) => {
        console.log(res);
        // window.location.reload();
        setUpdatemode(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //report post
  const handlereport = async () => {
    const report = await axios
      .put(
        `http://localhost:7000/v2/postApi/post-report/${post.uuid}/${user.UserName}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div class="row">
        <div class="col-9 ">
          <div className="singlepost-Wrap">
            {post.photo && (
              <img
                src={PF + post.photo}
                alt="post image"
                className="w-100 spost-img"
              />
            )}
            {updatemode ? (
              <div>
                <input
                  type="text"
                  value={title}
                  className="spost-titleinput form-control form-control-lg  mt-3 mb-2 border-0"
                  autoFocus={true}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            ) : (
              <h1 className="text-center spost-title">
                {title}
                {post.UserName === user.UserName && (
                  <div className="spost-edit">
                    <i
                      class="fa-regular fa-pen-to-square spost-icon"
                      onClick={() => setUpdatemode(true)}
                    ></i>
                    <i
                      class="fa-regular fa-trash-can spost-icon"
                      onClick={handledelete}
                    ></i>
                  </div>
                )}
              </h1>
            )}
            <div className="singlepost-info">
              <Link to={`/home/?UserName=${post.UserName}`} className="linkdec">
                <span className="post-author">
                  Author : <strong>{post.UserName}</strong>
                </span>
              </Link>

              <div>
                <span className="post-time">
                  {new Date(post.createdAt).toDateString()}
                </span>
                {updatemode ? null : (
                  <button
                    className="spost-report btn btn-outline-info ms-3"
                    onClick={handlereport}
                  >
                    Report
                  </button>
                )}
              </div>
            </div>
          </div>
          {updatemode ? (
            <div className="m-4">
              <label for="sel1" class="form-label cat-lable">
                Select Category
              </label>
              <select
                class="form-select  spost-catinput"
                id="sel1"
                name="categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {catdata.map((data) => {
                  return <option>{data.name}</option>;
                })}
              </select>
              <textarea
                className="form-control mt-3 spost-decpinput"
                rows={10}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          ) : (
            <p className="spost-decp m-3">{desc}</p>
          )}
          {updatemode ? (
            <div className="w-100 parent-b">
              <button type="submit" className="update-b" onClick={handleupdate}>
                Update
              </button>
            </div>
          ) : null}
        </div>

        <div class="col-3">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
};

export default Singlepost;
