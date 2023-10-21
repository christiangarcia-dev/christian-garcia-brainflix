import './Hero.scss'
import React, { useRef } from 'react';
import videoDetails from '../../data/video-details.json'
import playSvg from '../../assets/icons/play.svg'

function Hero({currentVideo}) {

    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return(
        <section className='hero'>
            <video className='hero__video' poster={videoDetails[0].image}></video>
        </section>
    )
}

export default Hero;