import { React, useEffect, useState } from 'react'; 
import { getPosts } from './services/post.js'; 
import { Modal } from './components/Modal/Modal.jsx'

useEffect(()=>{
    //getPosts is the get request from the api call file (post.js)
    const posts = getPosts()
})

const [ isOpen, setIsOpen ] = useState(false); 
const [currentPost, setCurrentPost] = useState({})

const handleClick = (currentValue) => {
    setCurrentPost(currentValue)
    setIsOpen(true)
}

const displayPosts = (currentValue) => {
    <>
        <div> {currentValue.title} </div> 
        <img src={currentValue.image} />
        <div> {currentValue.likes} </div>
        <div> {currentValue.category} </div> 
        <div> {currentValue.location} </div>
        <button onClick={() => handleClick(currentValue)} />
    </> 
}

//array.map(function(currentValue, index, arr), thisValue)

const Home = (posts) => {
    
    return (
        <>
            {posts.forEach(displayPosts(currentValue))}
            {isOpen && <Modal currentPost={currentPost}  setModalOpen={setIsOpen} />}
        </>
    )
}

export default { Home }

