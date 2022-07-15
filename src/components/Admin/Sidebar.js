import axios from "axios";
import "./Admin.css";
import { Button, Input, Space, Table, Layout, Menu } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  SearchOutlined,
  TeamOutlined,
  WechatOutlined,
} from "@ant-design/icons";

import Highlighter from "react-highlight-words";

const { Header, Sider, Content } = Layout;

const AdminSidebar = () => {
  return (
    <Sider className="adminsidebar ">
      <h4 className="mt-4 logotitle">
        Blog<span className="logo-title">ger</span>
      </h4>

      <Menu mode="inline" className="sidemenu">
        <Menu.Item key="/home">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/home" />
        </Menu.Item>
      </Menu>
      <Menu mode="inline" className="sidemenu">
        <Menu.Item key="/admin">
          <TeamOutlined />
          <span>Userlist</span>
          <Link to="/admin" />
        </Menu.Item>
      </Menu>
      <Menu mode="inline" className="sidemenu">
        <Menu.Item key="/postdetail">
          <PictureOutlined />
          <span>Postlist</span>
          <Link to="/postdetail" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminSidebar;
