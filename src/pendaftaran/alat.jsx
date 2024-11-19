// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const RegistrasiAlat = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', namaperangkat: 'WifiRP1', kodeSwitch: 'SwRP1' },
    { key: '2', namaperangkat: 'CctvHS1', kodeSwitch: 'SwHS1' },
    { key: '3', namaperangkat: 'TeleponHS1', kodeSwitch: 'SwHS3' },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Nama Pernagkat',
      dataIndex: 'namaperangkat',
      key: 'namaperangkat',
    },
    {
      title: 'Switch',
      dataIndex: 'kodeSwitch',
      key: 'kodeSwitch',
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
          placeholder="Nama Motor"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Select placeholder="Switch" style={{ width: '200px', marginRight: '10px' }}>
          <Option value="yamaha">Yamaha</Option>
          <Option value="suzuki">Suzuki</Option>
          <Option value="honda">Honda</Option>
        </Select>
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
