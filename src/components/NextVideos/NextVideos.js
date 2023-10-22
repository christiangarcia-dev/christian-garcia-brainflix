import './NextVideos.scss'
import videoDetails from '../../data/video-details.json'

function NextVideos({videos, onVideoSelect}) {

    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <article className='videos__container'>
                {videos.map(video => (
                    <div key={video.id} className='videos__item' onClick={() => onVideoSelect(video)}>
                    <div className='videos__item__thumbnail-container'>
                        <img className='videos__item__thumbnail' src={video.image}></img>
                    </div>
                    <div className='videos__item__text-container'>
                        <h3 className='videos__item__title'>{video.title}</h3>
                        <p className='videos__item__channel'>{video.channel}</p>
                    </div>
                </div>
                ))}
            </article>
        </section> 
    )
}

export default NextVideos;