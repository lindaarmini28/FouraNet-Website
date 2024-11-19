import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { AppstoreAddOutlined, AppstoreOutlined, DesktopOutlined, SwitcherOutlined, ShareAltOutlined } from '@ant-design/icons'; // Use DesktopOutlined instead of ServerOutlined
import { Link } from 'react-router-dom';
import './Dashboard.jsx';

const { Title } = Typography;

const Halaman1 = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Dashboard</Title>

            <Row gutter={16}>
                {/* Alat Jaringan */}
                <Col span={8}>
                    <Link to="/dashboard">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<AppstoreAddOutlined style={{ fontSize: '50px', color: '#1890ff' }} />}
                        >
                            <Title level={4}>Alat Jaringan</Title>
                        </Card>
                    </Link>
                </Col>

                {/* Panel */}
                <Col span={8}>
                    <Link to="/dashboard">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<AppstoreOutlined style={{ fontSize: '50px', color: '#1890ff' }} />}
                        >
                            <Title level={4}>Panel</Title>
                        </Card>
                    </Link>
                </Col>

                {/* Server */}
                <Col span={8}>
                    <Link to="/dashboard">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<DesktopOutlined style={{ fontSize: '50px', color: '#1890ff' }} />}  
                        >
                            <Title level={4}>Server</Title>
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '20px' }}>
                {/* Switch */}
                <Col span={8}>
                    <Link to="/dashboard/switch">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<SwitcherOutlined style={{ fontSize: '50px', color: '#1890ff' }} />}
                        >
                            <Title level={4}>Switch</Title>
                        </Card>
                    </Link>
                </Col>

                {/* Router */}
                <Col span={8}>
                    <Link to="/dashboard/router">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<ShareAltOutlined style={{ fontSize: '50px', color: '#1890ff' }} />}
                        >
                            <Title level={4}>Router</Title>
                        </Card>
                    </Link>
                </Col>

                {/* Tempat */}
                <Col span={8}>
                    <Link to="/dashboard/tempat">
                        <Card
                            hoverable
                            style={{ textAlign: 'center' }}
                            cover={<AppstoreAddOutlined style={{ fontSize: '50px', color: '#1890ff' }} />} // Use an icon of your choice
                        >
                            <Title level={4}>Tempat</Title>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Halaman1;