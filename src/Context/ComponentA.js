import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";
export const anyName = createContext();

const ComponentA = () => {
  const [name, setName] = useState(" from component A");
  const [count, setCount] = useState(0);
  return (
    <div>
      <anyName.Provider
        value={{
          name,
          setName,
          setCount,
          message: "i m from a to check",
        }}
      >
        <p> {count}</p>
        <h3>ComponentA</h3>
        <ComponentB />
      </anyName.Provider>
    </div>
  );
};

export default ComponentA;
