// src/Pendaftaran/Pendaftaran.jsx
import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './pendaftaran.css';

const { Title } = Typography;

const Pendaftaran = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        console.log('Form Values:', values);

        setTimeout(() => {
            setLoading(false);
            alert('Pendaftaran berhasil!');
            navigate('/dashboard'); // arahkan ke dashboard atau halaman lain setelah mendaftar
        }, 2000);
    };

    return (
        <div className="pendaftaran-container">
            <Title level={2}>Pendaftaran</Title>
            <Form
                name="pendaftaran"
                layout="vertical"
                onFinish={onFinish}
                className="pendaftaran-form"
            >
                <Form.Item
                    label="Nama Lengkap"
                    name="fullname"
                    rules={[{ required: true, message: 'Masukkan nama lengkap Anda' }]}
                >
                    <Input placeholder="Nama Lengkap" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Masukkan email Anda' },
                        { type: 'email', message: 'Email tidak valid' },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Kata Sandi"
                    name="password"
                    rules={[{ required: true, message: 'Masukkan kata sandi Anda' }]}
                >
                    <Input.Password placeholder="Kata Sandi" />
                </Form.Item>

                <Form.Item
                    label="Konfirmasi Kata Sandi"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Konfirmasi kata sandi Anda' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error('Kata sandi tidak cocok')
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Konfirmasi Kata Sandi" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        className="pendaftaran-button"
                    >
                        Daftar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Pendaftaran;
