import React, { useState } from "react";
import useInput from "../Hooks/useInput";
const UserForm = () => {
  const [FirstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const [address, bindAddress, resetAddress] = useInput("");
  const [pincode, bindPincode, resetPincode] = useInput("");

  let as_variable_markUp = {
    __html: "setting this dangerouslyInnerHTML as variable",
  };
  function asFun_markUp() {
    return {
      __html: "setting dangerouslysetInnerHTML from function",
    };
  }
  function onSubmitHandle(e) {
    e.preventDefault();
    alert(`Hello ${FirstName} ${lastName}`);
    // resetFirstName();
    // resetLastName();
    // resetAddress();
    // resetPincode();
  }
  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <div
          dangerouslySetInnerHTML={{
            __html: "this text is using dangerouslySetIneerHTML",
          }}
        ></div>
        <div dangerouslySetInnerHTML={as_variable_markUp} />
        <div dangerouslySetInnerHTML={asFun_markUp()}></div>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="">last Name</label>
          <input type="text" {...bindLastName} />
        </div>

        {/* ///////////// */}
        <div>
          <label htmlFor="">Address</label>
          <input type="text" {...bindAddress} />
        </div>
        {/* //////////////// */}
        <div>
          <label htmlFor="">PinCode</label>
          <input type="text" {...bindPincode} />
        </div>
        <button type="submit" onClick={onSubmitHandle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
