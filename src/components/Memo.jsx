import React from "react";

const Memo = ({ name }) => {
  console.log(`Rendering Memo Component`);
  return <div>{name}</div>;
};

export default React.memo(Memo);
