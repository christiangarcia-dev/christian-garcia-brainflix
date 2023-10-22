import './VideoInfo.scss'
import videoDetails from '../../data/video-details.json'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'

function VideoInfo() {

    return (
        <section className='video-info'>
            <h1 className='video-info__title'>{videoDetails[0].title}</h1>
            <article className='video-info__stats'>
                <div className='video-info__group channel-timestamp'>
                    <h2 className='video-info__channel'>By {videoDetails[0].channel}</h2>
                    <h2 className='video-info__timestamp'>{new Date(Number(videoDetails[0].timestamp)).toLocaleDateString()}</h2>
                </div>
                <div className='video-info__group views-likes'>
                    <h2 className='video-info__views'><img className='video-info__views-icon' src={viewsIcon}></img>{videoDetails[0].views}</h2>
                    <h2 className='video-info__likes'><img className='video-info__likes-icon' src={likesIcon}></img>{videoDetails[0].likes}</h2>
                </div>
            </article>
            <p className='video-info__description'>{videoDetails[0].description}</p>
        </section>
    )
}

export default VideoInfo;