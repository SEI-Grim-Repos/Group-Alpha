import React from "react";
import { getComments, createComment } from '../../services/comment.js'

function Modal({ currentPost, setModalOpen }) {    
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState("");

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

    function displayComments(currentValue, index){
        return (
            <div key={index}>{currentValue.body}</div>
        );
    }
  
    return (
        <>
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
        </>
    )
}

export default Modal;
