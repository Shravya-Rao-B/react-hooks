import React , {useContext} from 'react'
import {ReducerWithContextHook} from '../../App'


function ComponentC() {
 const countContext = useContext(ReducerWithContextHook)
  return (
    <div>
    CompC
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    <div>{countContext.countState}</div>
    </div>
  )
}

export default ComponentC