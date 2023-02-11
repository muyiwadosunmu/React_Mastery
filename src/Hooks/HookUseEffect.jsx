import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`useEffect Updating title`)
    document.title = `You clicked ${count} times`
  }, [count])
// The dependency Array is watching for changes in props or state
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click: {count}</button>
    </div>
  );
};

export default HookUseEffect;
