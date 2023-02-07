import React ,{useContext} from 'react';
import {UserContext, WorkContext} from '../../App';

function ContextWithHook() {
  const userValue = useContext(UserContext);
  const workValue = useContext(WorkContext);
  console.log(userValue,workValue);
  return (
    <div>
        {userValue} - {workValue}
    </div>
  )
}

export default ContextWithHook