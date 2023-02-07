import React , {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
const [posts, setPosts] = useState([]);
 useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(resp => {
        console.log('fetching data', resp.data);
        setPosts(resp.data)
    })
    .catch(error => console.log('error', error))
 },[])
  return (
    <div>
        <ul>
            {posts.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default DataFetching