import './Hero.scss'

function Hero({currentVideo}) {

    return(
        <section className='hero'>
            <video className='hero__video' poster={currentVideo.image} alt={currentVideo.title} controls></video>
        </section>
    )
}

export default Hero;