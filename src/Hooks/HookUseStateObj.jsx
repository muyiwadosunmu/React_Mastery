import React from "react";
import { useState } from "react";

const HookUseStateObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return <div>
    <form>
        <input type="text" value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})} />
        <input type="text" value={name.lastName} onChange={(e) => setName({...name,lastName:e.target.value})}/>
        <h2>Your name is - {name.firstName}</h2>
        <h2>Your lastName is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  </div>;
};

export default HookUseStateObj;
