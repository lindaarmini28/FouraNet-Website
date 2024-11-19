import React, { useState } from 'react';
import './layout.css';
import {
  AppstoreOutlined,
  FormOutlined,
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Typography } from 'antd';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/logo-lengkap.png';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '/dashboard', <AppstoreOutlined />), // Key sebagai path
  getItem('Registrasi', 'sub1', <FormOutlined />, [
    getItem('Registrasi Tempat', '/regis-tempat'),
    getItem('Registrasi Server', '/regis-server'),
  ]),
  getItem('Manajemen User', '/manajemen-user', <TeamOutlined />),
  getItem('Pengaturan', '/pengaturan', <SettingOutlined />),
];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleMenuClick = (e) => {
    console.log('Navigating to:', e.key); // Debug
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: '#ffffff' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: '16px',
            gap: '8px',
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
          {!collapsed && (
            <Typography.Text style={{ color: '#031779', fontWeight: 'bold' }}>
              FauraNet
            </Typography.Text>
          )}
        </div>

        <Menu
          theme="light"
          defaultSelectedKeys={['/dashboard']}
          mode="inline"
          items={items}
          onClick={handleMenuClick} // Tambahkan handler
          style={{
            color: '#031779',
          }}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: '#f9f9f9' }} />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[
              { title: 'User' },
              { title: 'Admin' },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#f9f9f9',
            }}
          >
           {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright ©{new Date().getFullYear()} Created by FauraNet
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;