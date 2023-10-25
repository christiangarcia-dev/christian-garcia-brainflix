import './App.scss'
import './styles/partials/_variables.scss'
import './styles/partials/_mixins.scss'
import './styles/partials/_global.scss'
import videoDetails from './data/video-details.json'
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import VideoInfo from './components/VideoInfo/VideoInfo'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos'

import Upload from './pages/Upload/Upload'

function App() {

  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoDetails);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  }

  const sideVideos = videos.filter(video => video.id !== currentVideo.id);

  return (
    <body>
      <header>
        <Navbar />
        <Hero currentVideo={currentVideo}/>
      </header>
      <main className='main'>
        <section className='main__one'>
          <VideoInfo videoDetails={currentVideo} />
          <Comments comments={currentVideo.comments}/>
        </section>
        <section className='main__two'>
          <NextVideos videos={sideVideos} onVideoSelect={handleVideoSelect} />
        </section>
      </main>
      <Upload />
    </body>
  );
}

export default App;
