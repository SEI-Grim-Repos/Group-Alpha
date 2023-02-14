import {useState, useEffect} from "react";
import { getComments, createComment } from '../../services/comment.js'
import { deletePost } from "../../services/post.js";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import './Modal.css';

function Modal({ currentPost, setModalOpen }) {    
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleClose = () => {
      setModalOpen(false);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        //postComment will be the post request 
        createComment(newComment)
    };

    let navigate = useNavigate();

    useEffect(() => {
        async function displayComments() {
            let response = await getComments()
            setComments(response)
        }
         displayComments()

    }, [])


    async function handleDelete (id) {
        await deletePost(id);
        alert("Post deleted");
        navigate("/all-posts", { replace: true });
        window.location.reload();
      }
  
    return (
        <div className="modal">
        <div className='modal-content'>
            <img src={currentPost.image}/>
            <div>{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>Location: {currentPost.location}</div>
            <div>Likes: {currentPost.likes}</div>
            <form onSubmit={handleCommentSubmit}>
                <input type="text" value={newComment} onChange={handleCommentChange} />
                <button type="submit">Submit Comment</button>
            </form>
       {comments.map((comments) => (<p>{comments}</p>))}
            <button className="closeButton" onClick={handleClose}>X</button>


            <div className='delete'>
                {/* <button onClick={() => handleDelete (currentPost._id)}> Delete Button </button> */}
                <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete (currentPost._id)}
                />
            </div>
        </div>
        </div>
    );
}

export default Modal;