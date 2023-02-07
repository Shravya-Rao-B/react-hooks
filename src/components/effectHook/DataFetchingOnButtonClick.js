/* Simply set the id to another state variable on id change */
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOnButtonClick() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => {
            //Note that if the ID is empty all the data is returned
            console.log('data fetched',resp.data);
            setPost(resp.data)
        })
        .catch( error => console.log(error))
    },[idFromButtonClick])
    const handleChange = (e) => {
        setId(e.target.value)
    }
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
  return (
    <div>
        <input  type="text" value={id} onChange={handleChange} />
        <button onClick={handleClick}>Click</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingOnButtonClick