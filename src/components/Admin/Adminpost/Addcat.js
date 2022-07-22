import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Admin.css";

import {
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Button, Input, Space, Layout } from "antd";

import Highlighter from "react-highlight-words";
import AdminSidebar from "../Sidebar";
import AdminHeader from "../Header";

const { Header, Sider, Content } = Layout;

const AddCategory = () => {
  const [cat, setCat] = useState("");

  const handlesubmit = () => {
    axios
      .post("http://localhost:7000/v3/category/createcat", { name: cat })
      .then((Response) => {
        console.log(Response);
        // setData(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Layout>
        <AdminSidebar></AdminSidebar>
        <Layout className="site-layout">
          <AdminHeader></AdminHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 480,
            }}
          >
            <div className="container my-5 ">
              <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 p-5 catstyle">
                <h2 className="text-center cat-title">Add Category</h2>
                <form onSubmit={handlesubmit}>
                  <div className="mb-4">
                    <label htmlFor="category" className="form-label cat-label">
                      Enter Category Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new Category Name"
                      name="name"
                      onChange={(e) => setCat(e.target.value)}
                    />
                  </div>
                  <div className="text-center my-3">
                    <button
                      type="submit"
                      className="btn btn-outline-info w-100 btnstyle"
                    >
                      Add Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AddCategory;
