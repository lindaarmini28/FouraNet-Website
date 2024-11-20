import React, { useState } from 'react';
import { Button, Input, Select, Table, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import router from "../../assets/router.jpg";

const { Option } = Select;

const RegistrasiRouter = () => {
  // Sample data for the table
  const [dataSource, setDataSource] = useState([
    { key: '1', kodeRouter: 'RRP1', kodePanel: 'PnRP1', lokasitambahan: 'Dekat Ruang 1', image: router },
    { key: '2', kodeRouter: 'RHS1', kodePanel: 'PnHS1', lokasitambahan: 'Di Sebelah Kiri Tangga Utama', image: router },
    { key: '3', kodeRouter: 'RHS2', kodePanel: 'PnHS2', lokasitambahan: 'Dekat Koridor Utama', image: router },
  ]);

  // State for input fields
  const [kodeRouter, setKodeRouter] = useState("");
  const [kodePanel, setKodePanel] = useState("");
  const [lokasitambahan, setLokasiTambahan] = useState("");
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    return false; // Prevent default upload behavior
  };

  // Handle save action
  const handleSave = () => {
    if (!kodeRouter || !kodePanel || !lokasitambahan || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      kodeRouter,
      kodePanel,
      lokasitambahan,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setKodeRouter("");
    setKodePanel("");
    setLokasiTambahan("");
    setImage(null);
    message.success("Data berhasil disimpan!");
  };

  // Columns configuration for the table
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Kode Router',
      dataIndex: 'kodeRouter',
      key: 'kodeRouter',
    },
    {
      title: 'Kode Panel',
      dataIndex: 'kodePanel',
      key: 'kodePanel',
    },
    {
      title: 'Lokasi Tambahan',
      dataIndex: 'lokasitambahan',
      key: 'lokasitambahan',
    },
    {
      title: "Gambar",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        image ? <img src={image} alt="uploaded" style={{ width: "50px", height: "50px" }} /> : null
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button type="primary" icon={<EditOutlined />} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px', background: '#f0f2f5' }}>
      {/* Input fields */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Input
          placeholder="Router"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodeRouter}
          onChange={(e) => setKodeRouter(e.target.value)}
        />
        <Select
          placeholder="Kode Panel"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodePanel}
          onChange={(value) => setKodePanel(value)}
        >
          <Option value="PnRP1">PnRP1</Option>
          <Option value="PnHS1">PnHS1</Option>
          <Option value="PnHS2">PnHS2</Option>
        </Select>
        <Input
          placeholder="Lokasi Tambahan"
          style={{ width: '200px', marginRight: '10px' }}
          value={lokasitambahan}
          onChange={(e) => setLokasiTambahan(e.target.value)}
        />
        
        {/* Upload button for image */}
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={handleImageUpload}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>

        <Button type="primary" onClick={handleSave} style={{ marginLeft: '10px' }}>Save</Button>
      </div>

      {/* Table */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        style={{ background: '#ffffff' }}
      />
    </div>
  );
};

export default RegistrasiRouter;