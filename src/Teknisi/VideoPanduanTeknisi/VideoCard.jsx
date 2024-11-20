// src/components/VideoCard.js
import React, { useState } from 'react';
import { Modal } from 'antd';

const VideoCard = ({ video }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="video-card" onClick={handleCardClick}>
        <img src={video.play_thumbnail} alt={video.play_name} className="video-thumbnail" />
        <h3>{video.play_name}</h3>
        <p>{video.play_description}</p>
      </div>

      <Modal
        title={video.play_name}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <iframe
          width="100%"
          height="400"
          src={video.play_url}
          title={video.play_name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{video.play_description}</p>
      </Modal>
    </>
  );
};

export default VideoCard;
