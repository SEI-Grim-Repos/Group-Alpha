import { useState, useEffect, useRef } from "react";
import { updatePost } from "../../services/post.jsx";
import * as BiIcons from "react-icons/bi";
import "./Modal.css";

function Edit_Form({ currentPost, setEditFormOpen }) {
  const titleRef = useRef();
  const bodyRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();

  const [item, setItem] = useState({
    title: "",
    body: "",
    location: "",
    image: "", //this will be a url
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
  });

  const handleClose = () => {
    setEditFormOpen(false);
  };

  async function handleDelete(currentPost) {
    await deletePost(currentPost.id);
    setEditFormOpen(false);
  }

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
    };
    //updatePost takes two arguments, the id and then the updated object
    await updatePost(currentPost.id, updatedItem);
    setEditFormOpen(false);
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
        />
        <div>Edit the body:</div>
        <input
          name="bodyEdit"
          type="text"
          placeholder={item.body}
          ref={bodyRef}
        />
        <div>Edit the location:</div>
        <input
          name="locationEdit"
          type="text"
          placeholder={item.location}
          ref={locationRef}
        />
        <div>Edit image link:</div>
        <input
          name="imageEdit"
          type="url"
          placeholder={item.image}
          ref={imageRef}
        />
        <button type="submit">Submit</button>
      </form>
      <button className='closeEditButton' onClick={handleClose}>Exit</button>
      <div className="delete">
        <BiIcons.BiTrash
          id="trash"
          className="icon"
          onClick={() => handleDelete(currentPost)}
        />Delete Item
      </div>
    </>
  );
}

export default Edit_Form;