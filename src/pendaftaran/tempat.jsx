// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiTempat = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', namaperusahaan: 'Rumah Putri', alamat: 'Jl. Kerobokan, Singaraja' },
    { key: '2', namaperusahaan: 'Hotel Sejahtera', alamat: 'Jl. Manggis, Tejakula' },
    { key: '3', namaperusahaan: 'LaoNet', alamat: 'Jl. Banyuasri, Singaraja' },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Nama Perusahaan',
      dataIndex: 'namaperusahaan',
      key: 'namaperusahaan',
    },
    {
      title: 'Alamat',
      dataIndex: 'alamat',
      key: 'alamat',
    },
    {
      title: 'Actions',
      key: 'actions',
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
    <div style={{ padding: '20px', background: '#f0f2f5' }}>
      <h2>Tempat</h2>

      {/* Input fields */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Input
          placeholder="Nama Perusahaan"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Input placeholder="Alamat" style={{ width: '200px', marginRight: '10px' }}
        />
        <Button type="primary">Save</Button>
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

export default RegistrasiTempat;
