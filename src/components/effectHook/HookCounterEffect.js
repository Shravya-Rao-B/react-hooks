import React , {useState, useEffect} from 'react'

function HookCounter() {
  const [counter, setCounter] = useState(0);
  /* use effect is just a function and to use it we just have to call it.
  We pass a parameter which is a function which gets executed after every render
  Similar to initial render with componentDidMount and runs every time after an update in componentDidUpdate
  Use effect is placed insdie the component. We can access state and props without additional code
  */
  useEffect(() => {
    document.title = `You clicked ${counter} times`
  },[counter])
  return (
    <div>
        <button onClick={() => {setCounter(counter + 1)}}>You clicked {counter} times</button>
    </div>
  )
}

export default HookCounter