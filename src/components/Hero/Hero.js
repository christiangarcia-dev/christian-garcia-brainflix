import './Hero.scss'
import React, { useRef } from 'react';

function Hero({currentVideo}) {

    return(
        <section className='hero'>
            <video className='hero__video' poster={currentVideo.image} alt={currentVideo.title} controls></video>
        </section>
    )
}

export default Hero;