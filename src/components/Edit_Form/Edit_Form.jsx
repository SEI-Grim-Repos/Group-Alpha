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
        //passing it to setItem loads it into state
        setItem(editObject); 
    });

    const handleClose = () => {
      setEditFormOpen(false);
    };

    const handleSubmit = async () => {
        //not sure what preventDefault does. yolo
        e.preventDefault(); 
        //this creates the updated Item object, which is necessary as not all values of necesarily been changed
        const updatedItem = {
            title: !titleRef.current.value ? item.title: titleRef.current.value,
            body: !bodyRef.current.value ? item.body: bodyRef.current.value,
            location: !locationRef.current.value ? item.location: locationRef.current.value,
            image: !imageRef.current.value ? item.image: imageRef.current.value
        }
        //updatePost takes two arguments, the id and then the updated object
        await updatePost(currentPost.id, updatedItem)
        setEditFormOpen(false);     
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