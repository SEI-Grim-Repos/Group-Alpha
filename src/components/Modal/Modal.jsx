import {useState, useEffect} from "react";
import { getComments, createComment } from '../../services/comment.js'
import { deletePost } from "../../services/post.js";
import { Link, useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";

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

    function displayComments(currentValue, index){
        return (
            <div key={index}>{currentValue.body}</div>
        );
    }

    async function handleDelete (id) {
        await deletePost(id);
        alert("Post deleted");
        navigate("/all-posts", { replace: true });
        window.location.reload();
      }
  
    return (
        <div className='modal-content'>
            <img src={currentPost.image}/>
            <div>{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>{currentPost.location}</div>
            <div>{currentPost.likes}</div>
            <form onSubmit={handleCommentSubmit}>
                <input type="text" value={newComment} onChange={handleCommentChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                {comments.map((currentValue, index) => displayComments(currentValue, index))}
            </div>
            <button onClick={handleClose}>Close</button>


            <div className='delete'>
                {/* <button onClick={() => handleDelete (currentPost._id)}> Delete Button </button> */}
                <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete (currentPost._id)}
                />
            </div>
        </div>
    );
}

export default Modal;