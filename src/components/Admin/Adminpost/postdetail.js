import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  UserOutlined,
  PictureOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Button, Input, Space, Table, Layout, Menu } from "antd";

import Highlighter from "react-highlight-words";
import AdminSidebar from "../Sidebar";
import AdminHeader from "../Header";

const { Header, Sider, Content } = Layout;

const Postdetail = () => {
  const [data, setData] = useState([]);

  //table
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  //table column

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
      ...getColumnSearchProps("title"),
    },
    {
      title: "UserName",
      dataIndex: "UserName",
      key: "UserName",
      width: "30%",

      ...getColumnSearchProps("UserName"),

      // render: (text) => <a>{text}</a>,
    },

    {
      title: "PostStatus",
      dataIndex: "poststatus",
      key: "poststatus",
      width: "30%",
      render: (text) => String(text),
      ...getColumnSearchProps("poststatus"),
    },
  ];
  const postlist = () => {
    axios
      .get("http://localhost:7000/v2/postApi/all-post")
      .then((Response) => {
        console.log(Response.data.result);
        setData(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    postlist();
  }, []);
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
            <Table
              columns={columns}
              dataSource={data}
              className="content-table table-striped"
              bordered
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Postdetail;
