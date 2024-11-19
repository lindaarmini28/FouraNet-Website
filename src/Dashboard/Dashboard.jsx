// src/Dashboard/Dashboard.jsx
import React, { useState } from "react";
import { Card, Input, Row, Col, Typography } from "antd";
import { SearchOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_Perusahaan.png";
import telepon from "../assets/telepon.png";
import wifi from "../assets/wifi.jpg";
import cctv from "../assets/cctv.png";

import "./Dashboard.css";

const { Title } = Typography;

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const data = [
    { id: 1, title: "WifiRP1 ", image: wifi },
    { id: 2, title: "TeleponHS1", image: telepon },
    { id: 3, title: "CctvHS1", image: cctv },
  ];

  const filteredData = data.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (card) => {
    navigate(`/detail/${card.id}`); // Make sure the URL string is wrapped in backticks
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        prefix={<SearchOutlined />}
      />
      <Row gutter={[5, 5]} className="card-container">
        {filteredData.map((card) => (
          <Col span={4} key={card.id}>
            <Card
              hoverable
              cover={<img alt={card.title} src={card.image} />}
              onClick={() => handleCardClick(card)}
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
