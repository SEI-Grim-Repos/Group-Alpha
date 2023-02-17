import { useState, useEffect, useRef } from "react";
import { updatePost, deletePost } from "../../services/post.js";
import "./Edit_Form.css";
import React from "react";

//add user ID and like count default values to response 

function Edit_Form({ currentPost, setEditFormOpen }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();

  const [item, setItem] = useState({
    title: "",
    body: "",
    location: "",
  });

  useEffect(() => {
    //currentPost may contain more key value pairs than we are editing, so we trim it down in a new object:
    const editObject = {
      title: currentPost.title,
      body: currentPost.body,
      location: currentPost.location,
      image: currentPost.image, //this will be a url
    };
    //passing it to setItem loads it into state
    setItem(editObject);
  },[currentPost]);

  const handleClose = () => {
    setEditFormOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //this creates the updated Item object, which is necessary as not all values of necesarily been changed
    const updatedItem = {
      title: !titleRef.current.value ? item.title : titleRef.current.value,
      body: !bodyRef.current.value ? item.body : bodyRef.current.value,
      location: !locationRef.current.value
        ? item.location
        : locationRef.current.value,
      image: !imageRef.current.value ? item.image : imageRef.current.value,
      likes: currentPost.likes, 
      user_id: currentPost.user_id
    };
    //updatePost takes two arguments, the id and then the updated object
    await updatePost(updatedItem, currentPost.id);
    setEditFormOpen(false);
    //have to use this rather than useNavigate since we are in a modal and not a different location
    window.location.reload();
  };

  return (
    <> 
      <form onSubmit={handleSubmit}>
        <div>Edit the title:</div>
        <input
          name="titleEdit"
          type="text"
          placeholder={item.title}
          ref={titleRef}
          className="bottomPadding"
        />
        <div>Edit the body:</div>
        <input
          name="bodyEdit"
          type="text"
          placeholder={item.body}
          ref={bodyRef}
          className="bottomPadding"
        />
        <div>Edit the location:</div>
        <input
          name="locationEdit"
          type="text"
          placeholder={item.location}
          ref={locationRef}
          className="bottomPadding"
        />
        <div>Edit image link:</div>
        <input
          name="imageEdit"
          type="url"
          placeholder={item.image}
          ref={imageRef}
          className="bottomPadding"
        />
        <br/>
        <button type="submit" className="bottomPadding">Submit</button>
      </form>
      <button className='closeEditButton bottomPadding' onClick={handleClose}>Exit</button>
    </>
  );
}

export { Edit_Form }