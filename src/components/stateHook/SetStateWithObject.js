import React , {useState} from 'react'

function SetStateWithObject() {
  const [name, setName] = useState({first:'', last:''})
  return (
    <div>
      {/* <p>---------------------Incorrect Implementation of setting state of object----------------------------------</p>
      <input type="text" value={name.first} onChange={(e) => setName({first :e.target.value})}/>
      <input type="text" value={name.last} onChange={(e) => setName({last : e.target.value})}/>
      <div>First Name :{name.first} Last Name :{name.last} </div> */}
      <p>---------------------Correct Implementation of setting state of object with spread----------------------------------</p>
      <input type="text" value={name.first} onChange={(e) => setName({...name, first :e.target.value})}/>
      <input type="text" value={name.last} onChange={(e) => setName({...name, last : e.target.value})}/>
      <div>First Name:<h3>{name.first}</h3> Last Name :<h3>{name.last}</h3></div>
    </div>
  )
}

export default SetStateWithObject