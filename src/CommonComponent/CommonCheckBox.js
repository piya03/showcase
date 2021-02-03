import React from "react";

const CommonCheckBox = ({ value, onChange, checked, labelval }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={value}>{labelval}</label>
    </div>
  );
};

export default CommonCheckBox;
