import './Comments.scss'
import videoDetails from '../../data/video-details.json'
import commentIcon from '../../assets/icons/add_comment.svg'

function Comments() {

    const totalComments = 0; 

    return (
        <>
            <section className='comments'>
                <h2 className='comments__amount'>{totalComments} Comments</h2>
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
                    <article className='entries__comment'>
                        <div className='entries__comment__avatar-container'>
                            <div className="entries__comment__avatar"></div>
                        </div>
                        <div className='entries__comment__text'>
                            <div className='entries__comment__subgroup'>
                                <h2 className='entries__comment__name'>{videoDetails[0].comments[0].name}</h2>
                                <h2 className='entries__comment__timestamp'>{new Date(Number(videoDetails[0].comments[0].timestamp)).toLocaleDateString()}</h2>
                            </div>
                            <p className='entries__comment__description'>{videoDetails[0].comments[0].comment}</p>
                        </div>
                    </article>
            </section>
        </>
    )
}

export default Comments;