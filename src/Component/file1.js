import React from 'react'
import {UserContext,ChannelContext} from '../App'

function file1() {
  return (
    <div>
      <UserContext.Consumer>
          {
              user => {

                return (<ChannelContext.Consumer>
                   { channel => {
                        return (
                            <div>Hello {user} {channel}</div>
                        )
                    }}
                </ChannelContext.Consumer>
                ) 
              }
          }
      </UserContext.Consumer>
    </div>
  )
}

export default file1
