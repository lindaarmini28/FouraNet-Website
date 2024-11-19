// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiServer = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', kodeServer: 'SvRP1', namaperusahaan: 'Rumah Putri', lokasitambahan: 'Belakang Gedung' },
    { key: '2', kodeServer: 'SvHS1', namaperusahaan: 'Hotel Sejahtera', lokasitambahan: 'Lantai 2' },
    { key: '3', kodeServer: 'SvHS2', namaperusahaan: 'Hotel Sejahtera', lokasitambahan: 'Lantai 3' },
  ];

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
          placeholder="Server"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Nama Perusahaan" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="yamaha">Rumah Putri</Option>
          <Option value="suzuki">Hotel Sejahtera</Option>
          <Option value="honda">LaoNet</Option>
        </Select>
        <Input placeholder="Lokasi Tambahan" style={{ width: '200px', marginRight: '10px' }}
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

export default RegistrasiServer;
