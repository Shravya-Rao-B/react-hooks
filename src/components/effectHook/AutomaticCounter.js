import React, {useState, useEffect} from 'react'

function AutomaticCounter() {
 const [count, setCount] = useState(0);
 useEffect(()=> {
    setInterval(() => {
        setCount(prevState => prevState + 1)
    }, 1000)
    return () => {
        clearInterval();
    }
 },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default AutomaticCounter