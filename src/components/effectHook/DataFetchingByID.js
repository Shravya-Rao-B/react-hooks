import axios from 'axios';
import React, {useState, useEffect} from 'react'

function DataFetchingByID() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => {
            //Note that if the ID is empty all the data is returned
            console.log('data fetched',resp.data);
            setPost(resp.data)
        })
        .catch( error => console.log(error))
    },[id])
    const handleChange = (e) => {
        setId(e.target.value)
    }
  return (
    <div>
        <input  type="text" value={id} onChange={handleChange} />
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingByID