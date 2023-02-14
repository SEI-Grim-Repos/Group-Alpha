import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/post.js';
import Modal from '../../components/Modal/Modal.jsx'
import "./home.css"
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleClick = (currentValue) => {
    setCurrentPost(currentValue);
    setIsOpen(true);
  };

  const displayPosts = (currentValue) => {
    return (
      <div className="post">
        <div> {currentValue.title} </div>
        <img className="image" src={currentValue.image} />
        <div> {currentValue.likes} Likes</div>
        <div> {currentValue.category} </div>
        <div> {currentValue.location} </div>
        <button onClick={() => handleClick(currentValue)}>x</button>
      </div>
    );
  };

  return (
    <>
      {posts.map((post) => displayPosts(post))}
      {isOpen && <Modal currentPost={currentPost} setModalOpen={setIsOpen} />}
    </>
  );
};

export default Home;