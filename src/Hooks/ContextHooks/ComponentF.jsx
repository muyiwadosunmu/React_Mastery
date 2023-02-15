import React from 'react'
import { UserContext, ChannelContext } from '../../App'

const ComponentF = ({user, channel}) => {
  return (
    <div>
      {user} -{channel} 
    </div>
  )
}

export default ComponentF
