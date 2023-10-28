import './NextVideos.scss'
import { Link } from 'react-router-dom';

function NextVideos({videos}) {

    return (
        <section className='videos'>
            <h2 className='videos__header'>Next Videos</h2>
            <article className='videos__container'>
                {videos.map(video => (
                    <Link to={`/videos/${video.id}`} key={video.id} className='videos__item'>
                        <div className='videos__item__thumbnail-container'>
                            <img className='videos__item__thumbnail' src={video.image}></img>
                        </div>
                        <div className='videos__item__text-container'>
                            <h3 className='videos__item__title'>{video.title}</h3>
                            <p className='videos__item__channel'>{video.channel}</p>
                        </div>
                    </Link>
                ))}
            </article>
        </section> 
    )
}

export default NextVideos;