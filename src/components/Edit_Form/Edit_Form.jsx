import {useState, useEffect, useRef} from "react";
import { updatePost } from '../../services/post.jsx'
import * as BiIcons from "react-icons/bi";
import './Modal.css';


function Edit_Form({ currentPost, setEditFormOpen }) {    
   
    const [ titleRef, bodyRef, locationRef, imageRef ] = useRef(); 
    
    const [item, setItem] = useState ({
        title: '', 
        body: '',
        location: '',
        image:'' //this will be a url 
    })

    useEffect(() => {
        //currentPost may contain more key value pairs than we are editing, so we trim it down in a new object: 
        const editObject = {
            title: currentPost.title, 
            body: currentPost.body,
            location: currentPost.location,
            image: currentPost.image //this will be a url 
        };
        setItem(editObject); 
    });

    const handleClose = () => {
      setEditFormOpen(false);
    };

    const handleSubmit = () => {
        e.preventDefault(); 

        //updatePost takes two arguments, the id and then the updated object
        updatePost(currentPost.id, item)
    }

    return (
        <>
            <div className='delete'>
                <BiIcons.BiTrash
                    id="trash"
                    className="icon"
                    onClick={() => handleDelete (currentPost.id)}
                />
            </div>  
        </>       
    );
}

export default Edit_Form;