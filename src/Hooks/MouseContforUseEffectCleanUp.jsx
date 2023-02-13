import React,{useEffect, useState} from 'react';
import HookMouse from './HookMouse';


const MouseContforUseEffectCleanUp = () => {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContforUseEffectCleanUp