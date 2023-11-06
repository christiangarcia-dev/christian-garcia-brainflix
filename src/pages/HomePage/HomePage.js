import './HomePage.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const [sideVideos, setSideVideos] = useState([]);
    const [previousVideo, setPreviousVideo] = useState(null);
    const { id } = useParams(); 

    const handleVideoSelect = (selectedVideo) => {
        if (currentVideo && currentVideo.id !== selectedVideo.id) {
            setSideVideos(prevSideVideos => [currentVideo, ...prevSideVideos]);
        }
        
        setCurrentVideo(selectedVideo);
        setSideVideos(prevSideVideos => prevSideVideos.filter(video => video.id !== selectedVideo.id));
        setPreviousVideo(currentVideo);
    };

    useEffect(() => {
        if (currentVideo && currentVideo.id) {
            setSideVideos(videos.filter(video => video.id !== currentVideo.id));
        }
    }, [currentVideo, videos]); 

    // Fetches all videos + sets the first video as the current video
    useEffect(() => {
        const fetchVideos = async () => {
            axios.get('http://localhost:8085/videos')
                .then(response =>  {
                    setVideos(response.data);

                    if (response.data.length > 0) {
                        setCurrentVideo(response.data[0]);
                        setSideVideos(response.data.slice(1));
                    }
                })
                .catch(error => console.error('Error fetching videos:', error));
        }
        fetchVideos();
    }, []);

    // Fetches single video by id + sets it as the current video
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8085/videos/${id}`)
                .then(response => {
                    setCurrentVideo(response.data);
                })
                .catch(error => console.error('Error fetching video details:', error));
        } else if (videos.length > 0) {
            // If there's no id in the url, set the first video as the current video
            setCurrentVideo(videos[0]);
        }
    }, [id, videos]);

    if (!currentVideo || sideVideos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <header>
                <Navbar />
                <Hero currentVideo={currentVideo}/>
            </header>
            <main className='main'>
                <section className='main__one'>
                    <VideoInfo videoDetails={currentVideo} />
                    <Comments comments={currentVideo?.comments || []} />
                </section>
                <section className='main__two'>
                    <NextVideos videos={sideVideos} onVideoSelect={handleVideoSelect} />
                </section>
            </main>
        </>
    )
}

export default HomePage;
