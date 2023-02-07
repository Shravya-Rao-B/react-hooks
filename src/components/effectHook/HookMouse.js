import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = (e) => {
        console.log('mouse event called');
        setX(e.clientX);
        setY(e.clientY);
    }
    //Wihtout the dependency parameter, the useeffect would get called after every render
    //When we pass an empty dependency array we can see that only mouse vent gets called and 
    //use effect does not get called on re renders.
    useEffect(()=> {
        console.log('use effect called');
        // Add an eventListener which listens to 'mousemove' event with logMousePosition as event handler
        // Adding an empty array as a second parameter so that mousemove event is only set once.
        window.addEventListener('mousemove', logMousePosition)
    },[])
  return (
    <div>
        X - {x} Y - {y}
    </div>
  )
}

export default HookMouse