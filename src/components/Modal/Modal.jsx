import {useState, useEffect} from "react";
import { getComments, createComment } from '../../services/comment.js'
import { deletePost } from "../../services/post.js";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import './Modal.css';

function Modal({ currentPost, setModalOpen }) {    
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false)
    const [newComment, setNewComment] = useState("");

    const handleClose = () => {
      setModalOpen(false);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault()
        //postComment will be the post request 

        const finalComment = {
            user_id: currentPost.user_id,
            post: currentPost.id,
            body: newComment
        }

        await createComment(finalComment)
        setToggle(prev => !prev)
    };

    let navigate = useNavigate();

    useEffect(() => {
        async function displayComments() {
            let response = await getComments()
            setComments(response)
        }
         displayComments()
    }, [toggle])


    async function handleDelete (id) {
        await deletePost(id);
        navigate("/", { replace: true });
        window.location.reload()
      }
    return (
        <div className="modal">
        <div className='modal-content'>
            <img src={currentPost.image}/>
            <div className="title">{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>Location: {currentPost.location}</div>
            <div>Likes: {currentPost.likes}</div>
            <h3>Comments:</h3>
            <div className="comments">
            {comments.filter((comment) => comment.post === currentPost.id ).map((comments) => (<p>User {currentPost.user_id}: {comments.body}</p>))}
            </div>
            <br />
            <form onSubmit={handleCommentSubmit}>
                <input className="submitComment" type="text" value={newComment} onChange={handleCommentChange} />
                <button type="submit">Submit Comment</button>
            </form>
            <button className="closeButton" onClick={handleClose}>X</button>

            <br />
            <div className='delete'>
                <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete (currentPost.id)}
                />
            </div>
        </div>
        </div>
    );
}

export default Modal;