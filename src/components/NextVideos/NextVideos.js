import './NextVideos.scss'
import videoDetails from '../../data/video-details.json'

function NextVideos() {

    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <article className='videos__container'>
                <div className='videos__item'>
                    <img className='videos__item__thumbnail' src={videoDetails[1].image}></img>
                    <div className='videos__item__text-container'>
                        <h3 className='videos__item__title'>{videoDetails[1].title}</h3>
                        <p className='videos__item__channel'>{videoDetails[1].channel}</p>
                    </div>
                </div>
            </article>
        </section> 
    )
}

export default NextVideos;