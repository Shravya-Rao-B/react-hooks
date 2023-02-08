/* State and action as an object
Benifit of using this particualr pattern (state and action as object) could be taking advantage of another property of action
in the example called 'value'. The name can be anything.
We could add another parameter 'value' and provide the value to be incrementeed with
We can add more components of similar usecase with the number cases in the reducer function
remianing the same.
If we needed to maintain another counter, we could just add another property to the state object
We need to handle this new state change in the reducer by adding new action types.
increment2, decrement2, reset2 in this example.
This can also be handled better with multiple reducers.
*/
import React, {useReducer} from 'react'
const initialState = {
    firstCounter : 0,
    secondCounter : 0
}
const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
          case 'decrement':
            return {...state , firstCounter: state.firstCounter - action.value };
            case 'increment2':
                return {...state, secondCounter: state.secondCounter + action.value};
              case 'decrement2':
                return {...state , secondCounter: state.secondCounter - action.value };
          case 'reset':
            return initialState
            case 'reset2':
                return initialState
        default:
        return state
    }
}
function CounterTwo() {
 const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value :1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
        <button onClick={() => dispatch({type: 'decrement', value :5})}>Decrement 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <div>{count.firstCounter}</div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement2', value :1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment 5</button>
        <button onClick={() => dispatch({type: 'decrement2', value :5})}>Decrement 5</button>
        <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
        <div>{count.secondCounter}</div>
    </div>
  )
}

export default CounterTwo