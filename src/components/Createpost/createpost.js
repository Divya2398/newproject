import "./createpost.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";

const Createpost = () => {
  const [catdata, setCatdata] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    if (photo) {
      data = new FormData();
      data.append("file", photo);
      data.append("title", title);
      data.append("category", category);
      data.append("desc", desc);
      data.append("UserName", user.UserName);
    } else {
      data = {
        UserName: user.UserName,
        title: title,
        desc: desc,
        category: category,
      };
    }
    console.log(photo);
    axios
      .post("http://localhost:7000/v2/postApi/create-post", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //category
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
  // console.log(catdata);
  return (
    <>
      <div className="container p-5">
        {photo && (
          <img
            className="imagepost"
            // src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
            src={URL.createObjectURL(photo)}
            alt="post Image"
          />
        )}
        <form className="write-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="imginput">
              <i class="fa-solid fa-plus add-icon"></i>
            </label>
            <input
              type="file"
              id="imginput"
              className="fileinput "
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <div className=" mt-4 ">
            <input
              type="text"
              placeholder="Title"
              className="textinput form-control form-control-lg border border-info"
              autoFocus={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" mt-4">
            <label for="sel1" class="form-label">
              Select Category
            </label>
            <select
              class="form-select border border-info"
              id="sel1"
              name="categories"
              onChange={(e) => setCategory(e.target.value)}
            >
              {catdata.map((data) => {
                return <option> {data.name}</option>;
              })}
            </select>
          </div>
          <div className=" mt-4">
            <textarea
              className="form-control border border-info"
              placeholder="write your story.."
              type="text"
              value={desc}
              rows={5}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info pub-button">
            PUBLISH
          </button>
        </form>
      </div>
    </>
  );
};

export default Createpost;
