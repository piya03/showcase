import React, { useContext } from "react";
import { anyName } from "./ComponentA";
const ComponentC = () => {
  const { name, setCount } = useContext(anyName);
  return (
    <div>
      <h2>ComponentC</h2> <h3>{name} </h3>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count in crement
      </button>
    </div>
  );
};

export default ComponentC;
