import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts } from '../../services/post.js';
import Modal from '../../components/Modal/Modal.jsx';
import '../../components/Modal/Modal.css';
import './Country.css';

function CountryPage(){
    const [posts, setPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const { country } = useParams()

    let navigate = useNavigate()
  
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
      <div className="homebody" imagesrc="/screens/Home/farm animals.webp" >
      <div className= 'b78'>

      <button class="button-86" role="button" onClick={() => navigate('/create-post')}>Create Post</button>
      </div>
      
      <div className = "pic"></div>

      <div className='Title'>
        <h1 className= 'GG'>{country} Feed</h1>
        </div>

      {posts.filter(post => post.location === country).map((post) => displayPosts(post))}
      {isOpen && <Modal currentPost={currentPost} setModalOpen={setIsOpen} />}
    </div>

    );
}

export default CountryPage;