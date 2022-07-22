import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../Admin.css";
import { useNavigate, useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { Button, Space, Layout, Menu, Card } from "antd";

import Highlighter from "react-highlight-words";
import AdminSidebar from "../Sidebar";
import AdminHeader from "../Header";

const { Header, Sider, Content } = Layout;

const Activatepost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log("state update:", state.data.uuid);
  const uuid = state.data.uuid;
  //activate post

  const handleactive = async () => {
    const active = axios
      .put(`http://localhost:7000/v2/postApi/no-violation/${uuid}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          alert("post activated");
          navigate("/reported-post");
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
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
            <div className="active-container">
              <Card className="activepost-card">
                <h1 className="active-title">Post Activation</h1>
                <hr></hr>
                <h2 className="active-title">
                  Post Title : {state.data.title}.
                </h2>
                <p className="active-text">Posted By: {state.data.UserName}</p>
                <p className="active-text">
                  Posted On : {new Date(state.data.createdAt).toDateString()}
                </p>

                <button onClick={handleactive} className="active-postbtn">
                  Activate
                </button>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Activatepost;
