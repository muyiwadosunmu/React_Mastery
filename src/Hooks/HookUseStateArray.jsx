import React, { useState } from "react";

const HookUseStateArray = () => {
  const [items, setItems] = useState([]);
  const addItem = () =>
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);

  return (
    <div>
      <button onClick={addItem}>Add an item</button>
      <ul>
        {items.map((item) => 
          <l1 key={item.id}>{item.value}</l1>
          )}
      </ul>
    </div>
  );
};

export default HookUseStateArray;
