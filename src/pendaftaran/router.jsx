// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiRouter = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', kodeRouter: 'RRP1', kodePanel: 'PnRP1', lokasitambahan: 'Dekat Ruang 1' },
    { key: '2', kodeRouter: 'RHS1', kodePanel: 'PnHS1', lokasitambahan: 'Di Sebelah Kiri Tangga Utama' },
    { key: '3', kodeRouter: 'RHS2', kodePanel: 'PnHS2', lokasitambahan: 'Dekat Koridor Utama' },
  ];

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
      title: 'Panel',
      dataIndex: 'kodePanel',
      key: 'kodePanel',
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
      {/* Input fields */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Input
          placeholder="Router"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Kode Panel" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="PnRP1">PnRP1</Option>
          <Option value="PnHS1">PnHS1</Option>
          <Option value="PnHS2">PnHS2</Option>
        </Select>
        <Input
          placeholder="Lokasi Tambahan"
          style={{ width: '200px', marginRight: '10px' }}
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

export default RegistrasiRouter;
