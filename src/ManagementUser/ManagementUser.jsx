// Tempat.js
import React from 'react';
import { Button, Input, Select, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const ManagementUser = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', namaMotor: 'mio z', merk: 'yamaha' },
    { key: '2', namaMotor: 'satria F', merk: 'suzuki' },
    { key: '3', namaMotor: 'supra x 125', merk: 'honda' },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Nama Motor',
      dataIndex: 'namaMotor',
      key: 'namaMotor',
    },
    {
      title: 'Nama Merk',
      dataIndex: 'merk',
      key: 'merk',
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
        <Select placeholder="Pilih Merk" style={{ width: '200px', marginRight: '10px' }}>
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

export default ManagementUser;
