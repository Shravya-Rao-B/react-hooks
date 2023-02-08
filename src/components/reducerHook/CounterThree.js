/* Using multiple reducers 
*/
import React , {useReducer} from 'react'

const initialState = 0;
function CounterThree() {
 const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return  state + action.value;
        case 'decrement':
            return state - action.value
        case 'reset':
            return initialState
        default:
            return state;
    }
 }
 const [count, dispatch] = useReducer(reducer,initialState);
 const [count2, dispatch2] = useReducer(reducer,initialState);
  return (
    <div>
        <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        <div>{count}</div>
        <button onClick={() => dispatch2({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch2({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch2({type:'reset'})}>Reset</button>
        <div>{count2}</div>
    </div>
  )
}

export default CounterThree;