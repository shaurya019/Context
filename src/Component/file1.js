import React from 'react'
import {Usercontext} from '../App'
function file1() {
  return (
    <div>
      <User.Consumer>
          {
              user => {
                return  <div>Hello {user}</div>
              }
          }
      </User.Consumer>
    </div>
  )
}

export default file1
