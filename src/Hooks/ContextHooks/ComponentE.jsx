import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../../App'

const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        <ComponentF user = {user} channel={channel}
        />      
    </div>
  )
}

export default ComponentE
