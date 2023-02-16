import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetchwithUseState = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/').then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
    }).catch(error => {
        setLoading(false)
        setPost({})
        setError(`Something went wrong`)   
    })
   })
    

  return (
    <div>
      {loading ? 'Loading':post.title}
      {error? error: null}
    </div>
  )
}

export default DataFetchwithUseState
