import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        setPosts(response.data)
      } catch (error) {
        if(error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        }
      }
    }
   (fetchPosts());
  },[posts]) 
  return <div>
    <ul>
      {
        posts.map(post => <li key={post.id}>{post.title}</li> )
      }
    </ul>
  </div> 
}
export default DataFetching
