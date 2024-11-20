import React, { useState } from 'react';
import { Button, Input, Select, Table, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import panel from "../../assets/panel.jpeg";

const { Option } = Select;

const RegistrasiPanel = () => {
  // Sample data for the table
  const [dataSource, setDataSource] = useState([
    { key: '1', kodePanel: 'PnRP1', kodeServer: 'SvRP1', lokasitambahan: 'Lantai 1', image: panel},
    { key: '2', kodePanel: 'PnHS1', kodeServer: 'SvHS1', lokasitambahan: 'Pojok Lantai 2', image: panel},
    { key: '3', kodePanel: 'PnHS2', kodeServer: 'SvHS2', lokasitambahan: 'Pojok Lantai 3', image: panel},
  ]);

  // State for input fields
  const [kodePanel, setKodePanel] = useState("");
  const [kodeServer, setKodeServer] = useState("");
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
    if (!kodePanel || !kodeServer || !lokasitambahan || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      kodePanel,
      kodeServer,
      lokasitambahan,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setKodePanel("");
    setKodeServer("");
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
      title: 'Panel',
      dataIndex: 'kodePanel',
      key: 'kodePanel',
    },
    {
      title: 'Server',
      dataIndex: 'kodeServer',
      key: 'kodeServer',
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
          placeholder="Panel"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodePanel}
          onChange={(e) => setKodePanel(e.target.value)}
        />
        <Select
          placeholder="Server"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodeServer}
          onChange={(value) => setKodeServer(value)}
        >
          <Option value="SvRP1">SvRP1</Option>
          <Option value="SvHS1">SvHS1</Option>
          <Option value="SvHS2">SvHS2</Option>
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

export default RegistrasiPanel;