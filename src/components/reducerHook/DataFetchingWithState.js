import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingWithState() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState([]);
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(resp => {
        setLoading(false);
        setPost(resp.data)
        setError("");
      })
      .catch(error => {
        setError("Something went wrong");
      })
    },[])
  return (
    <div>
      {loading ? 'Loading' :  post.title }
      {error ? error : null}
    </div>
  )
}

export default DataFetchingWithState