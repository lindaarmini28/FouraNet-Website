// src/Dashboard/Dashboard.jsx
import React, { useState } from "react";
import { Card, Input, Row, Col, Typography } from "antd";
import { SearchOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import telepon from "../../assets/telepon.jpg";
import wifi from "../../assets/wifi.jpg";
import cctv from "../../assets/cctv.jpg";

import "./Dashboard.css";

const { Title } = Typography;

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const data = [
    { id: 1, title: "WifiRP1", image: wifi },
    { id: 2, title: "TeleponHS1", image: telepon },
    { id: 3, title: "CctvHS1", image: cctv },
  ];

  const filteredData = data.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (card) => {
    navigate(`/detail/${card.id}`);
  };

  return (
    <div className="dashboard-container">
      <Title level={2}>Dashboard</Title>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        prefix={<SearchOutlined />}
      />
      <Row gutter={[16, 16]} className="card-container">
        {filteredData.map((card) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={card.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={card.title}
                  src={card.image}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              }
              onClick={() => handleCardClick(card)}
              style={{
                height: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Card.Meta
                title={
                  <span>
                    <HomeOutlined style={{ marginRight: "8px" }} />
                    {card.title}
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;