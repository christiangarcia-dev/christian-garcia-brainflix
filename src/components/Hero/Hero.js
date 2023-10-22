import './Hero.scss'
import React, { useRef } from 'react';
import videoDetails from '../../data/video-details.json'
import playSvg from '../../assets/icons/play.svg'

function Hero({currentVideo}) {

    return(
        <section className='hero'>
            <video className='hero__video' poster={currentVideo.image} controls></video>
        </section>
    )
}

export default Hero;