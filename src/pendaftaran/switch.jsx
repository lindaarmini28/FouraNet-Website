// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiSwitch = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', kodeSwitch: 'SwRP1', kodeRouter: 'RRP1', lokasitambahan: 'Dekat Router' },
    { key: '2', kodeSwitch: 'SwHS1', kodeRouter: 'RHS1', lokasitambahan: 'Dekat Router' },
    { key: '3', kodeSwitch: 'SwHS2', kodeRouter: 'RHS1', lokasitambahan: 'Dekat lift' },
    { key: '4', kodeSwitch: 'SwHS3', kodeRouter: 'RHS2', lokasitambahan: 'Lemari utilitas' },
  ];

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
          placeholder="Switch"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Router" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="RRP1">RRP1</Option>
          <Option value="RHS1">RHS1</Option>
          <Option value="RHS2">RHS2</Option>
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

export default RegistrasiSwitch;
