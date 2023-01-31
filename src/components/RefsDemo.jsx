import React, { useRef } from "react";

const RefsDemo = () => {
  const inputEl = useRef();
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the Input</button>
    </div>
  );
};

export default RefsDemo;
