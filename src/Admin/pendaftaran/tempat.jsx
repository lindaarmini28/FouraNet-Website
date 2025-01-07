import React, { useState, useEffect } from "react";
import { Button, Input, Upload, message, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { getData, sendData, deleteData } from "../../utils/api_foura"; // Import API helpers

const RegistrasiTempat = () => {
  const [dataSource, setDataSource] = useState([]); // Data dari backend
  const [image, setImage] = useState(null);
  const [namaperusahaan, setNamaperusahaan] = useState("");
  const [alamat, setAlamat] = useState("");
  // const [editingKey, setEditingKey] = useState(null); // Untuk edit data

  // Fetch data dari backend ketika komponen dimuat
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getData("/tempat/read");
      setDataSource(response.datas);
    } catch (error) {
      message.error("Gagal memuat data: " + error.message);
    }
  };

  // Handle image upload
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(file); // Simpan file untuk dikirim ke backend
    };
    reader.readAsDataURL(file);
    return false; // Prevent default upload behavior
  };

  const handleSave = async () => {
    if (!namaperusahaan || !alamat || !image) {
      message.error("Harap lengkapi semua field dan upload gambar!");
      return;
    }

    const formData = new FormData();
    formData.append("nama_tempat", namaperusahaan);
    formData.append("alamat_tempat", alamat);
    formData.append("gambar_tempat", image);

    try {
      await sendData("/tempat/create", formData);
      message.success("Data berhasil disimpan!");
      fetchData(); // Refresh data setelah menyimpan
      setNamaperusahaan("");
      setAlamat("");
      setImage(null);
    } catch (error) {
      message.error("Gagal menyimpan data: " + error.message);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteData(`/tempat/delete/${id}`);
  //     message.success("Data berhasil dihapus!");
  //     fetchData(); // Refresh data setelah menghapus
  //   } catch (error) {
  //     message.error("Gagal menghapus data: " + error.message);
  //   }
  // };

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
            dataIndex: "id_tempat",
            key: "id_tempat",
          },
          {
            title: "Nama Perusahaan",
            dataIndex: "nama_tempat",
            key: "nama_tempat",
          },
          {
            title: "Alamat",
            dataIndex: "alamat_tempat",
            key: "alamat_tempat",
          },
          {
            title: "Gambar",
            dataIndex: "gambar_tempat",
            key: "gambar_tempat",
            render: (image) =>
              image ? (
                <img
                  src={`http://127.0.0.1:5000/${image}`}
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
                  onClick={() => {
                    setEditingKey(record.id_tempat);
                    setNamaperusahaan(record.nama_tempat);
                    setAlamat(record.alamat_tempat);
                  }}
                >
                  Edit
                </Button>
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(record.id_tempat)}
                >
                  Delete
                </Button>
              </>
            ),
          },
        ]}
        rowKey="id_tempat"
        pagination={{ pageSize: 5 }}
        style={{ background: "#ffffff", marginBottom: "20px" }}
      />
    </div>
  );
};

export default RegistrasiTempat;
