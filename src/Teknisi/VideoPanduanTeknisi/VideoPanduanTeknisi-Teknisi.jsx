import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Modal, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const VideoPanduanTeknisi2 = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://webfmsi.singapoly.com/api/playlist/13');
      const data = await response.json();

      if (data.message === "OK") {
        setVideos(data.datas || []);
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

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Title level={4}>Daftar Video Panduan Teknisi</Title>
      <Row gutter={[16, 16]}>
        {videos.map((video) => (
          <Col key={video.id_play} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={video.play_name}
                  src={video.play_thumbnail || 'https://via.placeholder.com/200'}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              onClick={() => setSelectedVideo(video)}
            >
              <Card.Meta
                title={video.play_name}
                description={
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{video.play_description}</span>
                    <PlayCircleOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedVideo?.play_name}
        visible={!!selectedVideo}
        footer={null}
        onCancel={() => setSelectedVideo(null)}
        width={800}
      >
        {selectedVideo?.play_url.includes('youtube.com') ? (
          <iframe
            width="100%"
            height="400"
            src={selectedVideo.play_url.replace('watch?v=', 'embed/')}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            width="100%"
            height="400"
            controls
            src={selectedVideo?.play_url}
          ></video>
        )}
        <p>
          <strong>Deskripsi: </strong>
          </p>
        <p>{selectedVideo?.play_description}</p>
      </Modal>
    </div>
  );
};

export default VideoPanduanTeknisi2;
