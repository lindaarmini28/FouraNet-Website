import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Table, List, Card } from 'antd';
import Logo from "../assets/Logo_Perusahaan.png";

const { Title } = Typography;

// Sample data with added fields: name, logo, address, and server list
const data = [
    {
        id: 1,
        name: 'Hotel Sejahtera',
        logo: Logo,
        address: 'Jl. Sejahtera No. 1, Jakarta',
        description: 'Deskripsi Hotel Sejahtera',
        servers: ['Server 1', 'Server 2', 'Server 3'],
        panels: ['Panel 1', 'Panel 2'],
        routers: ['Router 1', 'Router 2'],
        switches: ['Switch 1', 'Switch 2'],
        maintenanceRecords: [
            { no: 1, date: '2024-11-15', technician: 'John Doe', maintenance: 'Upgrade firmware', status: 'Completed' },
            { no: 2, date: '2024-11-16', technician: 'Jane Smith', maintenance: 'Server check', status: 'Pending' },
        ],
    },
    // Add other data items here similarly...
];

const DetailPage = () => {
    const { id } = useParams();
    const card = data.find((item) => item.id === parseInt(id));

    if (!card) {
        return <p>Detail tidak ditemukan.</p>;
    }

    // Columns for the maintenance records table
    const columns = [
        { title: 'No', dataIndex: 'no', key: 'no' },
        { title: 'Hari/Tanggal', dataIndex: 'date', key: 'date' },
        { title: 'Nama Teknisi', dataIndex: 'technician', key: 'technician' },
        { title: 'Maintenance', dataIndex: 'maintenance', key: 'maintenance' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>{card.name}</Title>
            <img src={card.logo} alt={card.name} style={{ width: '200px', height: 'auto' }} />
            <p><strong>Alamat:</strong> {card.address}</p>
            <p>{card.description}</p>

            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Card title="Server List" style={{ width: '200px', marginRight: '20px' }}>
                    <List
                        dataSource={card.servers}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Card>
                <Card title="Panel List" style={{ width: '200px', marginRight: '20px' }}>
                    <List
                        dataSource={card.panels}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Card>
                <Card title="Router List" style={{ width: '200px', marginRight: '20px' }}>
                    <List
                        dataSource={card.routers}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Card>
                <Card title="Switch List" style={{ width: '200px' }}>
                    <List
                        dataSource={card.switches}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Card>
            </div>

            <Title level={4}>Maintenance Records</Title>
            <Table
                dataSource={card.maintenanceRecords}
                columns={columns}
                rowKey="no"
                pagination={false}
            />
        </div>
    );
};

export default DetailPage;
