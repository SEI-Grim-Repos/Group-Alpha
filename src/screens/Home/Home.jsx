import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/post.js';
import Modal from '../../components/Modal/Modal.jsx'
import "./home.css"
import Hamburger from '../../components/HamburgerMenu/Hamburger.jsx';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      let posts = await getPosts();
      //this reverses the order of objects in the posts array(should render them newest to oldest now)
      posts = posts.reverse(); 
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
        <h2> {currentValue.title} </h2>
        <img className="image" src={currentValue.image} />
        <div> {currentValue.likes} Likes</div>
        <div> {currentValue.category} </div>
        <div> Location: {currentValue.location} </div>
      <br></br>
        <button className='createComment' onClick={() => handleClick(currentValue)}>Comment</button>
      </div>
    );
  };

  return (
    <div className="homebody"imagesrc="/screens/Home/farm animals.webp" >
      <Hamburger />
      
      <div className = "pic"></div>
      <div className='Title'>
        <h1>FoodFeed</h1>
        </div>

      {posts.map((post) => displayPosts(post))}
      {isOpen && <Modal currentPost={currentPost} setModalOpen={setIsOpen} />}
    </div>


  );
};

export default Home;