import React, {useState, useEffect} from 'react'

const IntervalHooksCounter = () => {

    const [count, setCount] = useState(0);
    const tick = () => {
        setCount(count + 1)
    }

    // const tick = (prevProps, prevState) => {
    //     setCount(prevCount => prevCount + 1)
    // } --> It's best to add dependency array, if we're not then we are having no states we're watching out for, This code above will work without specifying any dependency array
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    },[count])
  return (
    <div>{count}</div>
  )
}

export default IntervalHooksCounter