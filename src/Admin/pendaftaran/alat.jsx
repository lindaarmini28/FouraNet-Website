import React, { useState } from "react";
import { Button, Input, Select, Table, Upload, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import cctv from "../../assets/cctv.jpg";
import telepon from "../../assets/telepon.jpg";
import wifi from "../../assets/wifi.png";

const { Option } = Select;

const RegistrasiAlat = () => {
  // Sample data for the table
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      namaperangkat: "WifiRP1",
      kodeSwitch: "SwRP1",
      lokasitambahan: "Ruang 1",
      image: wifi,
    },
    {
      key: "2",
      namaperangkat: "CctvHS1",
      kodeSwitch: "SwHS1",
      lokasitambahan: "Ruang 2",
      image: cctv,
    },
    {
      key: "3",
      namaperangkat: "TeleponHS1",
      kodeSwitch: "SwHS3",
      lokasitambahan: "Ruang 3",
      image: telepon,
    },
  ]);

  // State for input fields
  const [namaperangkat, setNamaperangkat] = useState("");
  const [kodeSwitch, setKodeSwitch] = useState("");
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
    if (!namaperangkat || !kodeSwitch || !lokasitambahan || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      namaperangkat,
      kodeSwitch,
      lokasitambahan,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setNamaperangkat("");
    setKodeSwitch("");
    setLokasiTambahan("");
    setImage(null);
    message.success("Data berhasil disimpan!");
  };

  // Columns configuration for the table
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Nama Perangkat",
      dataIndex: "namaperangkat",
      key: "namaperangkat",
    },
    {
      title: "Switch",
      dataIndex: "kodeSwitch",
      key: "kodeSwitch",
    },
    {
      title: "Lokasi Tambahan",
      dataIndex: "lokasitambahan",
      key: "lokasitambahan",
    },
    {
      title: "Gambar",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={image}
            alt="uploaded"
            style={{ width: "50px", height: "50px" }}
          />
        ) : null,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
          >
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
    <div style={{ padding: "20px", background: "#f0f2f5" }}>
      {/* Input fields */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Input
          placeholder="Nama Alat Perangkat"
          style={{ width: "200px", marginRight: "10px" }}
          value={namaperangkat}
          onChange={(e) => setNamaperangkat(e.target.value)}
        />
        <Select
          placeholder="Switch"
          style={{ width: "200px", marginRight: "10px" }}
          value={kodeSwitch}
          onChange={(value) => setKodeSwitch(value)}
        >
          <Option value="SwRP1">SwRP1</Option>
          <Option value="SwHS1">SWHS1</Option>
          <Option value="SwHS2">SwHS2</Option>
          <Option value="SwHS3">SwHS3</Option>
        </Select>
        <Input
          placeholder="Lokasi Tambahan"
          style={{ width: "200px", marginRight: "10px" }}
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

        <Button
          type="primary"
          onClick={handleSave}
          style={{ marginLeft: "10px" }}
        >
          Save
        </Button>
      </div>

      {/* Table */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        style={{ background: "#ffffff" }}
      />
    </div>
  );
};

export default RegistrasiAlat;