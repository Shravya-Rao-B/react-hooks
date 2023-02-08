import React , {useContext} from 'react'
import {ReducerWithContextHook} from '../../App'


function ComponentB() {
 const countContext = useContext(ReducerWithContextHook)
  return (
    <div>
    CompB
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    <div>{countContext.countState}</div>
    </div>
  )
}

export default ComponentB