import React, { useContext } from "react";
import { anyName } from "./ComponentA";
const ComponentC = () => {
  const name = useContext(anyName);
  return (
    <div>
      <h2>ComponentC</h2> <h3>{name} </h3>
    </div>
  );
};

export default ComponentC;
