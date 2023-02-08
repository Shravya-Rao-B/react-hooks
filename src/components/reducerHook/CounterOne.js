//Simple state and action
import React , {useReducer} from 'react'

const initialState = 0;
//Reducer function takes in the current State and action and returns a new state.
const reducer = (state, action) => {
switch (action){
  case 'increment':
    return state + 1;
  case 'decrement':
    return state - 1;
  case 'reset':
    return initialState
  default:
    return state
}
};
function CounterOne() {
  /* use Reducer returns a state and a dispatch function
   The names of the state and function is defined by the coder
   Dispatch method takes argument 'action' which is passed to the reducer function to determine
   new state of the state variable.
   */
  const [count, dispatch ] = useReducer(reducer, initialState);
  return (
    <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <div>{count}</div>
    </div>
  )
}

export default CounterOne