import './UploadPage.scss'
import Navbar from '../../components/Navbar/Navbar'
import publishIcon from '../../assets/icons/publish.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import defaultThumbnail from '../../assets/images/upload-video-preview.jpg';

function UploadPage() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const videoData = {
            title: event.target.elements["video-title"].value,
            description: event.target.elements["video-description"].value,
            image: '/static/images/upload-video-preview.jpg'
        };

        axios.post('http://localhost:8085/videos', videoData)
            .then(response => {
                alert("Video upload successful");
                navigate("/");
            })
            .catch(error => {
                console.error('Error uploading video:', error);
                alert("Video upload failed");
        });
    };

    return(
        <>
            <Navbar />
            <h1 className='upload__header'>Upload Video</h1>
            <section className='upload'>
                <form onSubmit={handleSubmit}>
                    <article className='upload__form'>
                        <div className='upload__thumbnail-container'>
                            <h3 className='upload__thumbnail-header'>Video thumbnail</h3>
                            <img className='upload__thumbnail' src={defaultThumbnail} alt='upload thumbnail'></img>
                        </div>

                        <div className='upload__form__input-group'>
                            <label className="upload__form__label" htmlFor="video-title">Title your video</label>
                            <input className='upload__form__input' placeholder="Add a title to your video" type="text" name="video-title" id="video-title"></input>
                            <lable className="upload__form__label" htmlFor="video-description">Add a video description</lable>
                            <textarea className='upload__form__input-textarea' placeholder="Add a description to your video" type="text" name="video-description" id="video-description"></textarea>
                        </div>
                    </article>

                    <div className='upload__form__buttons-container'>
                        <button className='upload__form__submit-button' type="submit"><img className='upload__form__submit-button-icon' src={publishIcon}></img>Publish</button>
                        <Link className='upload__form__cancel-button-link' to="/">
                            <button className='upload__form__cancel-button'>Cancel</button>
                        </Link>
                    </div>
                </form>
            </section>
        </>
    )
}

export default UploadPage;