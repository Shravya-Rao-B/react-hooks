import React , {useContext} from 'react'
import {ReducerWithContextHook} from '../../App'


function ComponentA() {
 const countContext = useContext(ReducerWithContextHook)
 console.log('countContext',countContext);
  return (
    <div>
    CompA
    <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
    <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    <div>{countContext.countState}</div>
    </div>
  )
}

export default ComponentA