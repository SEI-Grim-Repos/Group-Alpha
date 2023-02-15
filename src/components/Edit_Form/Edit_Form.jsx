import {useState, useEffect} from "react";
import { updatePost } from '../../services/post.jsx'
import * as BiIcons from "react-icons/bi";
import './Modal.css';

function Edit_Form({ currentPost, setEditFormOpen }) {    
   
    const [newComment, setNewComment] = useState("");

    const handleClose = () => {
      setEditFormOpen(false);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    return (
        <div className="modal">
        <div className='modal-content'>
            <img src={currentPost.image}/>
            <div className="title">{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>Location: {currentPost.location}</div>
            <form onSubmit={handleCommentSubmit}>
                <input className="submitComment" type="text" value={newComment} onChange={handleCommentChange} />
                <button type="submit">Submit Comment</button>
            </form>

            {comments.filter((comment) => comment.post === currentPost.id ).map((comments) => (<p>{comments.body}</p>))}

            <button className="closeButton" onClick={handleClose}>X</button>


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

export default Edit_Form;