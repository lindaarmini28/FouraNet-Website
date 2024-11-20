import React, { useState } from "react";
import {
    ToolOutlined,
  SettingOutlined,
  LogoutOutlined,
  VideoCameraAddOutlined
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Tambahkan useLocation
import logo from "../../assets/logo-lengkap.png";

const { Header, Content, Footer, Sider } = Layout;

// Mapping path ke judul halaman
const pageTitles = {
  "/maintenance": "Maintenance",
  "/maintenance1" : "Manintenance",
  "/detailmaintenance" : "Detail Maintenance",
  "/video-panduan-teknisi" : "Tampilan Video",
  "/settingteknisi": " Pengaturan",
  
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Maintenance", "/maintenance", <ToolOutlined />),
  getItem("Video Panduan Maintenance", "/video-panduan-teknisi", <VideoCameraAddOutlined />),
  getItem("Pengaturan", "/settingteknisi", <SettingOutlined />),
  getItem("Logout", "/login", <LogoutOutlined />),
];

const MainLayoutTeknisi = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Ambil lokasi rute saat ini

  const handleMenuClick = (e) => {
    console.log("Navigating to:", e.key);
    navigate(e.key);
  };

  // Tentukan judul berdasarkan path aktif
  const currentTitle = pageTitles[location.pathname] || "FauraNet";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#ffffff" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            padding: "16px",
            gap: "8px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          {!collapsed && (
            <Typography.Text style={{ color: "#031779", fontWeight: "bold" }}>
              FouraNet
            </Typography.Text>
          )}
        </div>

        <Menu
          theme="light"
          defaultSelectedKeys={["/halaman1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
          style={{
            color: "#031779",
          }}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#f9f9f9",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Tampilkan judul halaman */}
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              color: "#031779",
              fontWeight: "bold",
            }}
          >
            {currentTitle}
          </Typography.Title>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#f9f9f9",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} Created by FauraNet
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayoutTeknisi;