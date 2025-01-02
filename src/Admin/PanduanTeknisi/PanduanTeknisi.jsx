import React, { useState, useEffect } from 'react';
import { Button, Drawer, Form, Input, message, Card, Col, Row, FloatButton, Popconfirm, Select, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, AppstoreAddOutlined } from '@ant-design/icons';

const { Title } = Typography;

const VideoPanduanTeknisi = () => {
  const [plays, setPlays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      const response = await fetch('https://webfmsi.singapoly.com/api/playlist/13');
      const data = await response.json();

      if (data.message === "OK") {
        setPlays(data.datas || []);
        setError(null);
      } else {
        throw new Error("Failed to load data.");
      }
    } catch (err) {
      setError(err.message || "Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmitPlay = async (values) => {
    const url = isEdit
      ? `https://webfmsi.singapoly.com/api/playlist/update/${selectedId}`
      : 'https://webfmsi.singapoly.com/api/playlist/13';
    const method = isEdit ? 'POST' : 'POST';

    try {
      console.log("Submitting data:", values);
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success(isEdit ? "Data updated successfully!" : "Data created successfully!");
        fetchData();
        setDrawerVisible(false);
        form.resetFields();
        setIsEdit(false);
        setSelectedId(null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit data.");
      }
    } catch (err) {
      message.error(err.message || "An error occurred while submitting data.");
    }
  };

  const handleDrawerEdit = (record) => {
    setDrawerVisible(true);
    setIsEdit(true);
    setSelectedId(record.id_play);
    form.setFieldsValue({
      play_name: record.play_name || '',
      play_genre: record.play_genre || '',
      play_url: record.play_url || '',
      play_description: record.play_description || '',
      play_thumbnail: record.play_thumbnail || '',
    });
  };

  const confirmDelete = async (id) => {
    try {
      const response = await fetch(`https://webfmsi.singapoly.com/api/playlist/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message.success("Data deleted successfully!");
        fetchData();
      } else {
        throw new Error("Failed to delete data.");
      }
    } catch (err) {
      message.error(err.message || "An error occurred while deleting data.");
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Title level={4}>Play List</Title>
      <FloatButton
        type="primary"
        icon={<AppstoreAddOutlined />}
        onClick={() => {
          setDrawerVisible(true);
          setIsEdit(false);
          form.resetFields();
        }}
        tooltip={<div>Add Play</div>}
      />

      <Row gutter={[16, 16]}>
        {plays.map((play) => (
          <Col key={play.id_play} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={play.play_name}
                  src={play.play_thumbnail || 'https://via.placeholder.com/200'}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              onClick={() => window.open(play.play_url, '_blank')}
              actions={[
                <EditOutlined key="edit" onClick={(e) => {
                  e.stopPropagation();
                  handleDrawerEdit(play);
                }} />,
                <Popconfirm
                  title="Delete this play?"
                  onConfirm={(e) => {
                    e.stopPropagation();
                    confirmDelete(play.id_play);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <DeleteOutlined key="delete" onClick={(e) => e.stopPropagation()} />
                </Popconfirm>,
              ]}
            >
              <Card.Meta
                title={play.play_name}
                description={
                  <>
                    <p><strong>Jenis:{play.play_genre}</strong></p>
                    <p>{play.play_description}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Drawer
        title={isEdit ? "Edit Play" : "Create New Play"}
        width={360}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        placement="right"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmitPlay}
        >
          <Form.Item
            name="play_name"
            label="Nama Video"
            rules={[{ required: true, message: 'Please input the play name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="play_genre"
            label="Jenis Video"
            rules={[{ required: true, message: 'Please select the genre!' }]}
          >
            <Select placeholder="Select a genre">
              <Select.Option value="Tips">Tips</Select.Option>
              <Select.Option value="Panduan">Panduan</Select.Option>
              <Select.Option value="Berita">Berita</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="play_url"
            label="Url Video"
            rules={[{ required: true, message: 'Please input the play URL!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="play_description"
            label="Description Video"
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="play_thumbnail"
            label="Thumbnail URL"
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {isEdit ? "Update Play" : "Create Play"}
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default VideoPanduanTeknisi;
