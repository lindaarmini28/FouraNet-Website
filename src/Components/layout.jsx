import React, { useState } from "react";
import {
  AppstoreOutlined,
  FormOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom"; // Tambahkan useLocation
import logo from "../assets/logo-lengkap.png";

const { Header, Content, Footer, Sider } = Layout;

// Mapping path ke judul halaman
const pageTitles = {
  "/halaman1": "Dashboard",
  "/regis-tempat": " Registrasi Tempat",
  "/regis-server": " Registrasi Server",
  "/regis-panel": " Registrasi Panel",
  "/regis-router": " Registrasi Router",
  "/regis-switch": " Registrasi Switch",
  "/regis-alat": " Registrasi Alat",
  "/managementuser": " Manajemen User",
  "/pengaturan": " Pengaturan",
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
  getItem("Dashboard", "/halaman1", <AppstoreOutlined />),
  getItem("Registrasi", "sub1", <FormOutlined />, [
    getItem("Registrasi Tempat", "/regis-tempat"),
    getItem("Registrasi Server", "/regis-server"),
    getItem("Registrasi Panel", "/regis-panel"),
    getItem("Registrasi Router", "/regis-router"),
    getItem("Registrasi Switch", "/regis-switch"),
    getItem("Registrasi Alat", "/regis-alat"),
  ]),
  getItem("Manajemen User", "/managementuser", <TeamOutlined />),
  getItem("Pengaturan", "/pengaturan", <SettingOutlined />),
  getItem("Logout", "/login", <LogoutOutlined />),
];

const MainLayout = ({ children }) => {
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
              FauraNet
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

export default MainLayout;
