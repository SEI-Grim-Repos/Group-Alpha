import {useState, useEffect} from "react";
import { getComments, createComment } from '../../services/comments.js'
import { getPost, deletePost } from "../../services/post.js";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import './Modal.css';
import { Edit_Form } from '../Edit_Form/Edit_Form.jsx'

function Modal({ currentPost, setModalOpen }) { 
    
    const [post, setPost] = useState({})
    const [newComment, setNewComment] = useState("");
    const [editFormOpen, setEditFormOpen ] = useState(false); 
    const [toggle, setToggle] = useState(false)

    let navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            let response = await getPost(currentPost.id)
            setPost(response)
        }
         fetchPost()
    }, [toggle])


    const handleClose = () => {
      setModalOpen(false);
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault()

        await createComment({body: newComment}, post.post.id)
        setNewComment("")
        setToggle(prev => !prev)
    };



    async function handleDelete (id) {
        await deletePost(id);
        navigate("/", { replace: true });
        window.location.reload()
    }

    const handleEditButtonClick = () => {
        setEditFormOpen(true);
    };
    
    return (
        <div className="modal">
            <button className="closeButton" onClick={handleClose}>X</button>
            <div className='modal-content'>
                <div className="PostTitle">{post.post?.title}</div>
                <img className="PostImg" src={post.post?.image}/>
                <div className="PostInfo">
                    <div>{post.post?.body}</div>
                    <div>Location: {post.post?.location}</div>
                    <div>Likes: {post.post?.likes}</div>
                </div>

                <div className="CommentContainer">
                <h3>Comments:</h3>
                <div className="comments">
                {post.comments?.map((comment) => (<p key={comment.id}>{comment.user}: {comment.body}</p>))}
                </div>
                <br />
                <form className="CommentForm" onSubmit={handleCommentSubmit}>
                    <input className="submitComment" placeholder="new comment" type="text" value={newComment} onChange={handleCommentChange} />
                    <button className="submitButton" type="submit">Submit Comment</button>
                </form>
                </div>
        
                <br />
                <button className="editFormButton" onClick={handleEditButtonClick}>Edit</button>
                {editFormOpen && <Edit_Form currentPost={currentPost} setEditFormOpen={setEditFormOpen}/>}
                <div className='delete'>
                    <BiIcons.BiTrash
                        id="trash"                    className="icon"
                        onClick={() => handleDelete (currentPost.id)}
                    />
                </div>
            </div>
        </div>
    );    
}

export default Modal;