// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiAlat = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', namaperangkat: 'WifiRP1', kodeSwitch: 'SwRP1', lokasitambahan: 'Ruang 1' },
    { key: '2', namaperangkat: 'CctvHS1', kodeSwitch: 'SwHS1', lokasitambahan: 'Ruang 2' },
    { key: '3', namaperangkat: 'TeleponHS1', kodeSwitch: 'SwHS3', lokasitambahan: 'Ruang 3' },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Nama Perangkat',
      dataIndex: 'namaperangkat',
      key: 'namaperangkat',
    },
    {
      title: 'Switch',
      dataIndex: 'kodeSwitch',
      key: 'kodeSwitch',
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
          placeholder="Nama Alat Perangkat"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Switch" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="SwRP1">SwRP1</Option>
          <Option value="SwHS1">SWHS1</Option>
          <Option value="SwHS2">SwHS2</Option>
          <Option value="SwHS3">SwHS3</Option>
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

export default RegistrasiAlat;
