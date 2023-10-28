import './Comments.scss'
import commentIcon from '../../assets/icons/add_comment.svg'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Comments() {

    const [comments, setComments] = useState([]);
    const { id } = useParams(); 
    const apiKey = '6b4b2c7a-2b87-45bc-a0ba-978e289aa20c';

    useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`);
        setComments(response.data.comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        }
    };

    fetchData();
    }, [id]);

    if (!comments) {
        return <div>Loading comments...</div>;
    }
    
    return (
        <>
            <section className='comments'>
                <h2 className='comments__amount'>{comments.length} Comments</h2>
                <form class="comments__form">
                    <div className='comments__avatar-container'>
                        <div className="comments__avatar"></div>
                    </div>
                    <div className='comments__form-container'>
                        <div className='comments__field-container'>
                            <label class="comments__label" for="comments-input">Join the conversation</label>
                            <textarea class="comments__input" type="text" name="comment" placeholder="Add a new comment" id="comments-input"></textarea>
                        </div>
                        <button class="comments__submit-button" type="submit"><img className='comments__submit-button-icon' src={commentIcon}></img>Comment</button>             
                    </div>       
                </form>
            </section>
            <section className='entries'>
                {comments.map(comment => (
                    <article className='entries__comment' key={comment.id}>
                        <div className='entries__comment__avatar-container'>
                            <div className="entries__comment__avatar"></div>
                        </div>
                        <div className='entries__comment__text'>
                            <div className='entries__comment__subgroup'>
                                <h2 className='entries__comment__name'>{comment.name}</h2>
                                <h2 className='entries__comment__timestamp'>{new Date(Number(comment.timestamp)).toLocaleDateString()}</h2>
                            </div>
                            <p className='entries__comment__description'>{comment.comment}</p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export default Comments;