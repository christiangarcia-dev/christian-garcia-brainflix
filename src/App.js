import './App.scss';
import './styles/partials/_variables.scss';
import './styles/partials/_mixins.scss';
import './styles/partials/_global.scss';
import React, { useState, useEffect } from 'react';
import Upload from './pages/UploadPage/UploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import axios from 'axios';

function App() {
  const [currentVideo, setCurrentVideo] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  }

  const sideVideos = videos.filter(video => video.id !== currentVideo.id);

  const apiKey = '6b4b2c7a-2b87-45bc-a0ba-978e289aa20c';

  useEffect(() => {
    async function getVideos() {
      try {
        const videoListResponse = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`);
        setVideos(videoListResponse.data);
  
        if (videoListResponse.data.length > 0) {
          const firstVideoId = videoListResponse.data[0].id;
          const firstVideoResponse = await axios.get(`https://project-2-api.herokuapp.com/videos/${firstVideoId}?api_key=${apiKey}`);
          setCurrentVideo(firstVideoResponse.data);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    getVideos();
  }, []);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} sideVideos={sideVideos} handleVideoSelect={handleVideoSelect} />} />
          <Route path="/videos/:id" element={<HomePage currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} sideVideos={sideVideos} handleVideoSelect={handleVideoSelect} />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
