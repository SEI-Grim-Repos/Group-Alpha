import { React, useEffect, useState } from 'react'; 
import { getPosts } from './services/post.js'; 

useEffect(()=>{
    //getPosts is the get request from the api call file (post.js)
    const posts = getPosts()
})

const displayPosts = () => {
    
}

//array.map(function(currentValue, index, arr), thisValue)

const Home = (posts) => {
    return (
        <>
            {posts.forEach(displayPosts(currentValue, index, arr))}
        </>
    )
}

