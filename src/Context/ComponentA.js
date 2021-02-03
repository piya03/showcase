import React, { useState } from "react";
import ComponentB from "./ComponentB";
export const anyName = React.createContext();

const ComponentA = () => {
  const [name, setName] = useState("I am from component A");

  return (
    <div>
      <anyName.Provider value={name}>
        <h3>ComponentA</h3>
        <ComponentB />
      </anyName.Provider>
    </div>
  );
};

export default ComponentA;
