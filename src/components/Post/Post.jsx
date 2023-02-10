import { React } from "react";

const Modal = ({ currentPost, setModalOpen }) => {
    
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
                {currentPost.comments.forEach(displayComments(currentComment))}
            </div>
            <button onClick={handleClose}>Close</button>
        </>
    )
}

export default Modal; 

// write post component 
// write .map function to populate home.jsx with post components 
// initialize modalOpen and setModalOpan on home.jsx 
// initialize currentPost and setCurrentPost on home.jsx 
// write setModalOpen function on home.jsx 
// write {modalOpen && <Modal currentPost={currentPost}>} on home.jsx 