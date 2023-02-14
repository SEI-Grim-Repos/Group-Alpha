import {useEffect, useState} from "react";
import { getComments } from '../../services/comment.js'

function Modal({ currentPost, setModalOpen }) {    
    const [comments, setComments] = useState([]);
    
    const handleClose = () => {
      setModalOpen(false);
    };

    function displayComments(currentValue, index){
        return (
            <div key={index}>{currentValue.body}</div>
        );
    }

    useEffect(() => {
        getComments().then(comments => {
            setComments(comments);
        });
    }, []);
  
    return (
        <>
            <img src={currentPost.image}/>
            <div>{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>{currentPost.location}</div>
            <div>{currentPost.likes}</div>
            <div>
                {comments.map((currentValue, index) => displayComments(currentValue, index))}
            </div>
            <button onClick={handleClose}>Close</button>
        </>
    )
}

export { Modal }