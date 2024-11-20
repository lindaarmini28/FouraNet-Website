// src/pages/VideoPanduanTeknisi2.js
import React, { useEffect, useState } from 'react';
import { getPlaylistByGroupId } from '../../services/apiServices';
import './VideoPanduanTeknisi-Teknisi.css'; // Gaya CSS khusus
import VideoCard from './videocard';

const VideoPanduanTeknisi2 = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlaylistByGroupId();
      setVideos(data);
    };

    fetchData();
  }, []);

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoPanduanTeknisi2;
