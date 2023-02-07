import React from 'react'
import { UserContext, WorkContext } from '../../App';

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {user => {
                return(
                <WorkContext.Consumer>
                    {
                        work => {
                    return <div>My name is {user}. Profession is {work}</div>
                    
                }
            }
                </WorkContext.Consumer>
               )
        }
    }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC