import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingSinglePost = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  
  useEffect(() => {
    const fetchPost = async() => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        console.log(response)
        setPost(response.data)
      } catch (error) {
        if(error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        }
      }
    }
   fetchPost();
  },[idFromButtonClick]) 
  return <div>
    <button type="button" onClick={handleClick}>Fetch Post</button>
    <input type="text" value={id} onChange={e => setId(e.target.value)} />
    <div>{post.title}</div>
  </div> 
}
export default DataFetchingSinglePost
