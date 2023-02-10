import { React } from "react";

function Modal({ currentPost, setModalOpen }) {    
    const handleClose = () => {
      setModalOpen(false);
    };

    function displayComments (currentComment){
        <div>{currentComment}</div>
    }
  
    return (
        <>
            <img src={currentPost.image}/>
            <div>{currentPost.title}</div>
            <div>{currentPost.body}</div>
            <div>{currentPost.location}</div>
            <div>{currentPost.likes}</div>
            <div>
                {currentPost.comments.forEach(displayComments())}
            </div>
            <button onClick={handleClose}>Close</button>
        </>
    )
}

export { Modal }

