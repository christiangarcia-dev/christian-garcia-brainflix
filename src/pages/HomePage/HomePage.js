import './HomePage.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import VideoInfo from '../../components/VideoInfo/VideoInfo'
import Comments from '../../components/Comments/Comments'; // Adjust the path as per your project structure
import NextVideos from '../../components/NextVideos/NextVideos'

function HomePage({ currentVideo, setCurrentVideo, sideVideos, handleVideoSelect }) {

    const apiKey = '6b4b2c7a-2b87-45bc-a0ba-978e289aa20c';
    let { id } = useParams();

    useEffect(() => {
        async function getVideoById() {
            if (id) {
                axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`) 
                    .then(response => {
                        setCurrentVideo(response.data);
                    })
                    .catch(error => console.error('Error fetching video details:', error));
            }
        }
        getVideoById();
    }, [id, apiKey]);
    

    return (
        <div>
            <div>
                <Navbar />
                <Hero currentVideo={currentVideo}/>
            </div>
            <div className='main'>
                <div className='main__one'>
                    <VideoInfo videoDetails={currentVideo} />
                    {currentVideo?.comments && <Comments comments={currentVideo.comments} />}
                </div>
                <div className='main__two'>
                    <NextVideos videos={sideVideos} onVideoSelect={handleVideoSelect} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;