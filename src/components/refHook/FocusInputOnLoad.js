import React, {useEffect, useRef} from 'react';

function FocusInputOnLoad() {
const inputRef = useRef(null);
/* useEffect to mimick componentDidMount for focusing on load, and empty depency array to foucs 
only once 
useRef hook allows us to point to the DOM node and the variable created acts as a reference
*/
 useEffect(() => {
        inputRef.current.focus();
 },[])
  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInputOnLoad