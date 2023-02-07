/* Implemneting as state hook. UseState lets us Hook into 'state' feature of React */
// Making a named inport of useState from react.
import React, {useState} from 'react';

function HookCounter() {
  /* - Hooks are simple functions. So to use them we just call them.
  - Use state is a function which accepts a initial value of state property and returns an array of current value
  of that state property and a method to update that property 
  - We destructure the returned state and method
  - When the component loads, the state is created and assigned with default value
  - The default value is not used on rerenders
  */
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>
    <div>Counter: {counter}</div>
    <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounter