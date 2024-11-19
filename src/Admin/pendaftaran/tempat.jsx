import React, { useState } from "react";
import { Button, Input, Upload, message, Table } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import cctv from "../../assets/cctv.png";

const RegistrasiTempat = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      namaperusahaan: "Rumah Putri",
      alamat: "Jl. Kerobokan, Singaraja",
      image: cctv,
    },
    {
      key: "2",
      namaperusahaan: "Hotel Sejahtera",
      alamat: "Jl. Manggis, Tejakula",
      image: cctv,
    },
    {
      key: "3",
      namaperusahaan: "LaoNet",
      alamat: "Jl. Banyuasri, Singaraja",
      image: cctv,
    },
  ]);
  const [image, setImage] = useState(null);
  const [namaperusahaan, setNamaperusahaan] = useState("");
  const [alamat, setAlamat] = useState("");

  // Handle image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    return false; // Prevent default upload behavior
  };

  const handleSave = () => {
    if (!namaperusahaan || !alamat || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    // Add new entry to dataSource with uploaded image
    const newData = {
      key: String(dataSource.length + 1), // Generate a new key
      namaperusahaan,
      alamat,
      image,
    };

    setDataSource([...dataSource, newData]);

    // Clear the input fields and image
    setNamaperusahaan("");
    setAlamat("");
    setImage(null);
    message.success("Data berhasil disimpan!");
  };

  return (
    <div style={{ padding: "20px", background: "#f0f2f5" }}>
      {/* Input fields */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Input
          placeholder="Nama Perusahaan"
          value={namaperusahaan}
          onChange={(e) => setNamaperusahaan(e.target.value)}
          style={{ width: "200px", marginRight: "10px" }}
        />
        <Input
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          style={{ width: "200px", marginRight: "10px" }}
        />

        {/* Upload Image Button */}
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={handleImageUpload}
        >
          <Button icon={<UploadOutlined />} style={{ marginRight: "10px" }}>
            Upload Gambar
          </Button>
        </Upload>

        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>

      <h2>Tempat</h2>

      {/* Table */}
      <Table
        dataSource={dataSource}
        columns={[
          {
            title: "No",
            dataIndex: "key",
            key: "key",
          },
          {
            title: "Nama Perusahaan",
            dataIndex: "namaperusahaan",
            key: "namaperusahaan",
          },
          {
            title: "Alamat",
            dataIndex: "alamat",
            key: "alamat",
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
        ]}
        pagination={{ pageSize: 5 }}
        style={{ background: "#ffffff", marginBottom: "20px" }}
      />
    </div>
  );
};

export default RegistrasiTempat;
