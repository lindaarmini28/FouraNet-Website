// src/PagePendaftaran/PagePendaftaran.jsx
import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './PagePendaftaran.css'; // Pastikan untuk membuat file CSS ini

const { Title } = Typography;

const PagePendaftaran = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/pendaftaran');
    };

    const cardData = [
        {
            title: 'Pendaftaran Anggota',
            description: 'Daftar sebagai anggota baru dan nikmati manfaatnya.',
        },
        {
            title: 'Pendaftaran Pengguna',
            description: 'Daftar sebagai pengguna untuk akses penuh.',
        },
    ];

    return (
        <div className="page-pendaftaran-container">
            <Title level={2}>Pilih Jenis Pendaftaran</Title>
            <Row gutter={[16, 16]} className="card-container">
                {cardData.map((card, index) => (
                    <Col span={12} key={index}>
                        <Card
                            hoverable
                            onClick={handleCardClick}
                            className="card"
                        >
                            <Title level={4}>{card.title}</Title>
                            <p>{card.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PagePendaftaran;
