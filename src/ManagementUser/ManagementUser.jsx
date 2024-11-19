import React from 'react';
import { Button, Input, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ManagementUser = () => {
  // Sample data for the table
  const dataSource = [
    { key: '1', Number: '1', Roles: 'Admin', Username: 'nunikastari', Password: 'nunik123' },
    { key: '2', Number: '2', Roles: 'Teknisi', Username: 'lindaarmini', Password: 'linda123' },
    { key: '3', Number: '3', Roles: 'Teknisi', Username: 'putridwi', Password: 'putri123' },
    { key: '4', Number: '4', Roles: 'Teknisi', Username: 'resthaaristita', Password: 'restha123' },
    { key: '5', Number: '5', Roles: 'Teknisi', Username: 'rangga', Password: 'rangga123' },
    { key: '6', Number: '6', Roles: 'Teknisi', Username: 'sindu', Password: 'sindu123' },
    { key: '7', Number: '7', Roles: 'Teknisi', Username: 'agastya', Password: 'agastya123' },
  ];

  // Columns configuration for the table
  const columns = [
    {
      title: 'Number',
      dataIndex: 'Number',
      key: 'Number',
    },
    {
      title: 'Roles',
      dataIndex: 'Roles',
      key: 'Roles',
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      key: 'Username',
    },
    {
      title: 'Password',
      dataIndex: 'Password',
      key: 'Password',
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
          placeholder="Role"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Input
          placeholder="Username"
          style={{ width: '200px', marginRight: '10px' }}
        />
        <Input
          placeholder="Password"
          style={{ width: '200px', marginRight: '10px' }}
          type="password"
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

export default ManagementUser;
