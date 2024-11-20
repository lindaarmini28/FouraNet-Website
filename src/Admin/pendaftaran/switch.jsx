import React, { useState } from 'react';
import { Button, Input, Select, Table, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import switcx from "../../assets/switcx.jpg";

const RegistrasiSwitch = () => {
  // Sample data for the table
  const [dataSource, setDataSource] = useState([
    { key: '1', kodeSwitch: 'SwRP1', kodeRouter: 'RRP1', lokasitambahan: 'Dekat Router', image: switcx},
    { key: '2', kodeSwitch: 'SwHS1', kodeRouter: 'RHS1', lokasitambahan: 'Dekat Router', image: switcx},
    { key: '3', kodeSwitch: 'SwHS2', kodeRouter: 'RHS1', lokasitambahan: 'Dekat lift', image: switcx},
    { key: '4', kodeSwitch: 'SwHS3', kodeRouter: 'RHS2', lokasitambahan: 'Lemari utilitas', image: switcx},
  ]);

  // State for input fields
  const [kodeSwitch, setKodeSwitch] = useState("");
  const [kodeRouter, setKodeRouter] = useState("");
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
    if (!kodeSwitch || !kodeRouter || !lokasitambahan || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      kodeSwitch,
      kodeRouter,
      lokasitambahan,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setKodeSwitch("");
    setKodeRouter("");
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
      title: 'Kode Switch',
      dataIndex: 'kodeSwitch',
      key: 'kodeSwitch',
    },
    {
      title: 'Router',
      dataIndex: 'kodeRouter',
      key: 'kodeRouter',
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
          placeholder="Switch"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodeSwitch}
          onChange={(e) => setKodeSwitch(e.target.value)}
        />
        <Select
          placeholder="Router"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodeRouter}
          onChange={(value) => setKodeRouter(value)}
        >
          <Option value="RRP1">RRP1</Option>
          <Option value="RHS1">RHS1</Option>
          <Option value="RHS2">RHS2</Option>
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

export default RegistrasiSwitch;