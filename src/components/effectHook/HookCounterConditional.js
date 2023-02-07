import React, {useState, useEffect} from 'react'

function HookCounterConditional() {
    const [user, setUser] = useState({count:0,name:''});
    /* Instead of conditions with prevstate and props, we add the dependencies to the 
    dependency array as second parameter.
    use case: update the title only when count changes
    So we need to pass only count as a dependency
    */
    useEffect(()=> {
        console.log('use effect runs only when count is updated');
        document.title = `You clicked ${user.count} times`
    },[user.count])
    const setUserName = (e) => {
        setUser({...user, name: e.target.value})
    }
  return (
    <div>
        <input type="text" value={user.name} onChange={e => setUserName(e)} />
        <button onClick={() => setUser({...user, count:user.count + 1})}>Counter {user.count}</button>
    </div>
  )
}

export default HookCounterConditional