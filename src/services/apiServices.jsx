// src/services/apiService.js
export const getPlaylistByGroupId = async () => {
    try {
      const response = await fetch('https://webfmsi.singapoly.com/api/playlist/13');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching playlist:', error);
      return [];
    }
  };
  