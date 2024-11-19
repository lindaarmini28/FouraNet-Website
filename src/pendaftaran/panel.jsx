// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiPanel = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', kodePanel: 'PnRP1', kodeServer: 'SvRP1', lokasitambahan: 'Lantai 1' },
    { key: '2', kodePanel: 'PnHS1', kodeServer: 'SvHS1', lokasitambahan: 'Pojok Lantai 2' },
    { key: '3', kodePanel: 'PnHS2', kodeServer: 'SvHS2', lokasitambahan: 'Pojok Lantai 3' },
  ];

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
          placeholder="Panel"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Server" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="SvRP1">SvRP1</Option>
          <Option value="SvHS1">SvHS1</Option>
          <Option value="SvHS2">SvHS2</Option>
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

export default RegistrasiPanel;
