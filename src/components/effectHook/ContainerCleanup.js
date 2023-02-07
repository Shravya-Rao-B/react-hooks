/*
In the below example, we can see that when 'display'in ContainerCleanup component becomes false,
if we have no cleanup code to remove mousemove event, we will continue to see logs from 'logMousePosition' trying to set X
and Y coordinates of the unmounted component
*/
import React, {useState} from 'react'
import CleanupUseEffect from './CleanupUseEffect';
import AutomaticCounter from './AutomaticCounter';

function ContainerCleanup() {
const [display, setDisplay] = useState(true);
const toggleDisplay = () => {
    setDisplay(prevState => !prevState);
}
  return (
    <div>
        <button onClick={toggleDisplay}>Toggle Display</button>
        { display &&  
        <CleanupUseEffect />
        }
        {display && 
        <AutomaticCounter />
    }
    </div>
  )
}

export default ContainerCleanup