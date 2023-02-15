import { createPost } from '../../services/post.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreatePost.css"

function NewPost(){
    const [ post, setPost ] = useState({
        user_id: "",
        image: "",
        title: "",
        body: "",
        location: "",
        likes: ""
    })


let navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPost(post);
    navigate(`/`, { replace: true })
    console.log(response)
};

const handleChange = (e) => {
    const { value, name } = e.target;

    setPost((prev) => ({
        ...prev,
        [name]: value
    }))
}


return (

    <div className='postbody' >

    <div className='bodycreate'>
        <h1 className='title'>FoodiePost</h1>
        <form className="create-form" onSubmit={handleSubmit} /*style={{flexDirection: 'column'}}*/>
            <input type="text"
            placeholder="Enter User ID"
            name="user_id"
            value={post.user_id}
            onChange={handleChange}></input>
           
            <input type="text"
            placeholder="Enter image URL"
            name="image"
            value={post.image}
            onChange={handleChange}></input>
            
            <input type="text"
            placeholder="Enter title"
            name="title"
            value={post.title}
            onChange={handleChange}></input>
            
            <input type="text"
            placeholder="Enter body..."
            name="body"
            value={post.body}
            onChange={handleChange}></input>
            
            <input type="text"
            placeholder="Enter location"
            name="location"
            value={post.location}
            onChange={handleChange}></input>
            
            <input type="text"
            placeholder="Enter likes"
            name="likes"
            value={post.likes}
            onChange={handleChange}></input>
           <br></br>
            <button type="submit">Create Post</button>
        </form>
       
    </div>
            </div>
)
}



export default NewPost;