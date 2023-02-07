/* Mimicking componentDidUnmount
If there were any event listeners and if that component unmounted, those listeners would be 
cleaned up in componentDidUnmount life cycle 
Here with useeffect it can be achieved by returning a function in the hook 
A cleanup code can be written in that return function.
In the below example, we can see that when 'display'in ContainerCleanup component becomes false,
if we have no cleanup code to remove mousemove event, we will continue to see logs from 'logMousePosition' trying to set X
and Y coordinates of the unmounted component
*/
import React, {useState, useEffect} from 'react'

function CleanupUseEffect() {
        const [x, setX] = useState(0);
        const [y, setY] = useState(0);

const logMousePosition = (e) => {
            console.log('mouse event called');
            setX(e.clientX);
            setY(e.clientY);
        }
useEffect (() => {
    window.addEventListener('mousemove',logMousePosition );
    //cleanup code
    return () => {
        window.removeEventListener('mousemove',logMousePosition);
    }
},[])
  return (
    <div>
   <div>x - {x} y - {y}</div>
    </div>
  )
  }

export default CleanupUseEffect