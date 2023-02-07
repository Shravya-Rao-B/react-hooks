import React , {useState} from 'react'

function HookCounterTwo() {
  const [counter,setCounter] = useState(0);
  /* This is the safe way to implement setting of new value. By passing it to a function that has access to
  previous state.
  */
  const incrementCounter = () => {
    setCounter(prevState => prevState + 1)
  }
  const decrementCounter = () => {
    setCounter(prevState => prevState - 1)
  }
  const resetCounter = () => {
    setCounter(0);
  }
  //Though the loop runs 5 times, the increment happens only once as we do not have access to its previous state.
  const incrementUnsafelyByFive = () => {
    for(let i=1 ; i<=5 ; i++){
        setCounter(counter + 1)
        console.log('iterarion:',i);
    }
  }
  const incrementSafelyByFive = () => {
    for(let i=1; i<=5; i++){
        setCounter(prevState => prevState + 1);
    }
  }
  return (
    <div>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <button onClick={resetCounter}>Reset</button>
    <button onClick={incrementUnsafelyByFive}>Increment unsafely by 5</button>
    <button onClick={incrementSafelyByFive}>Increment safely by 5</button>
    <div>Counter: {counter}</div>
    </div>
  )
}

export default HookCounterTwo