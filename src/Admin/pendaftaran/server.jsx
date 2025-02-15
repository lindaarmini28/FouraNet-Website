import React, { useState } from "react";
import { Button, Input, Upload, message, Table, Select } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import Server from "../../assets/server.jpeg";

const { Option } = Select;

const RegistrasiServer = () => {
  // Sample data for the table
  const [dataSource, setDataSource] = useState([
    { key: '1', kodeServer: 'SvRP1', namaperusahaan: 'Rumah Putri', lokasitambahan: 'Belakang Gedung', image: Server },
    { key: '2', kodeServer: 'SvHS1', namaperusahaan: 'Hotel Sejahtera', lokasitambahan: 'Lantai 2', image: Server },
    { key: '3', kodeServer: 'SvHS2', namaperusahaan: 'Hotel Sejahtera', lokasitambahan: 'Lantai 3', image: Server },
  ]);

  // State for input fields
  const [image, setImage] = useState(null);
  const [kodeServer, setKodeServer] = useState("");
  const [namaperusahaan, setNamaperusahaan] = useState("");
  const [lokasitambahan, setLokasiTambahan] = useState("");

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
    if (!kodeServer || !namaperusahaan || !lokasitambahan || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      kodeServer,
      namaperusahaan,
      lokasitambahan,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setKodeServer("");
    setNamaperusahaan("");
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
      title: 'Kode Server',
      dataIndex: 'kodeServer',
      key: 'kodeServer',
    },
    {
      title: 'Nama Perusahaan',
      dataIndex: 'namaperusahaan',
      key: 'namaperusahaan',
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
          placeholder="Kode Server"
          style={{ width: '200px', marginRight: '10px' }}
          value={kodeServer}
          onChange={(e) => setKodeServer(e.target.value)}
        />
        <Select
          placeholder="Nama Perusahaan"
          style={{ width: '200px', marginRight: '10px' }}
          value={namaperusahaan}
          onChange={(value) => setNamaperusahaan(value)}
        >
          <Option value="Rumah Putri">Rumah Putri</Option>
          <Option value="Hotel Sejahtera">Hotel Sejahtera</Option>
          <Option value="LaoNet">LaoNet</Option>
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

export default RegistrasiServer;