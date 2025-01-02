import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Table, Card, Button, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import cctv from "../../assets/cctv.png";

const { Title } = Typography;

// Sample data with added fields: name, logo, address, and server list
const data = [
  {
    id: 1,
    name: "Rumah Putri",
    logo: cctv,
    address: "Jl. Kerobokan, Singaraja",
    description:
      "Rumah sebelah kanan dari jalur utama, gerbang berwarna hijau dan terdapat kolam ikan didalamnya.",
    servers: ["SvRP1"],
    panels: ["PnRP1"],
    routers: ["RRP1"],
    switches: ["SwRp1"],
    maintenanceRecords: [
      {
        no: 1,
        date: "2024-11-15",
        technician: "John Doe",
        maintenance: "Upgrade CCTV",
        status: "Completed",
      },
      {
        no: 2,
        date: "2024-11-16",
        technician: "Jane Smith",
        maintenance: "CCTV check",
        status: "Pending",
      },
    ],
  },
  // Add other data items here similarly...
];

const DetailMaintenance = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));

  if (!card) {
    return <p>Detail tidak ditemukan.</p>;
  }

  // Columns for the maintenance records table
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Hari/Tanggal", dataIndex: "date", key: "date" },
    { title: "Nama Teknisi", dataIndex: "technician", key: "technician" },
    { title: "Maintenance", dataIndex: "maintenance", key: "maintenance" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => alert(`Edit record ${record.no}`)}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            danger
            onClick={() => alert(`Delete record ${record.no}`)}
          />
        </Space>
      ),
    },
  ];

  // Columns for the vertical device table
  const deviceColumns = [
    { title: "Jenis Perangkat", dataIndex: "type", key: "type" },
    { title: "Nama Perangkat", dataIndex: "name", key: "name" },
  ];

  // Combine server, panel, router, and switch into a single vertical table
  const devicesData = [
    ...card.servers.map((server) => ({ type: "Server", name: server })),
    ...card.panels.map((panel) => ({ type: "Panel", name: panel })),
    ...card.routers.map((router) => ({ type: "Router", name: router })),
    ...card.switches.map((switchItem) => ({ type: "Switch", name: switchItem })),
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Section: Title, Image, Address, and Description */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <Title level={2}>{card.name}</Title>
          <img
            src={card.logo}
            alt={card.name}
            style={{ width: "200px", height: "auto", marginBottom: "16px" }}
          />
          <p>
            <strong>Alamat:</strong> {card.address}
          </p>
          <p>{card.description}</p>
        </div>

        {/* Right Section: Vertical Device Table (Server, Panel, Router, Switch) */}
        <div style={{ flex: 1 }}>
          <Card title="Device List" style={{ marginBottom: "20px" }}>
            <Table
              dataSource={devicesData}
              columns={deviceColumns}
              rowKey="name"
              pagination={false}
              bordered
            />
          </Card>
        </div>
      </div>

      {/* Maintenance Records */}
      <Title level={4}>Maintenance Records</Title>
      
      {/* Add Button Above the Table */}
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => alert("Add new maintenance record")}
        >
          Add
        </Button>
      </div>

      <Table
        dataSource={card.maintenanceRecords}
        columns={columns}
        rowKey="no"
        pagination={false}
      />
    </div>
  );
};

export default DetailMaintenance;