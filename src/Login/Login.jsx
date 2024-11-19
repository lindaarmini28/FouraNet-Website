import { useState } from "react";
import { Layout, Button, Row, Col, Typography, Form, Input} from "antd";
import Logo from "../assets/logo-lengkap.png"; // Ubah sesuai lokasi logo
import "./login.css"; // Pastikan CSS tambahan disertakan
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    navigate("/Halaman1", { replace: true });
  };

  return (
    <Layout className="layout-default layout-signin" style={{ minHeight: "100vh" }}>
      <Header style={{ background: "white" }}>
        <div className="header-brand" style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <h5>FouraNet</h5>
        </div>
      </Header>
      <Content className="signin login-container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Row
          justify="center"
          align="middle" // Menyelaraskan kolom secara vertikal
          style={{ width: "100%", maxWidth: "1200px", padding: "4rem 0" }}
        >
          <Col
            xs={22}
            md={12}
            lg={10}
            className="logo-container" // Tambahkan kelas ini untuk styling
          >
            <img src={Logo} alt="Logo" style={{ maxWidth: "90%" }} />
          </Col>
          <Col xs={24} md={16} lg={10}>
            <Title className="mb-15" level={2} style={{ color: "#031779" }}>Sign In</Title>
            <Form onFinish={handleLogin} layout="vertical" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", padding: "0.8rem", color: username && password ? "#031779" : "#b0b0b0", }}
                  disabled={!username || !password}
                >
                  SIGN IN
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center", position: "sticky", bottom: 0, color: "#031779" }}>
        Copyright © 2024 FouraNet
      </Footer>
    </Layout>
  );
};

export default LoginPage;