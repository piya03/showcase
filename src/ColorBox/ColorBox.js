import React, { useState, useEffect, useRef } from "react";

const ColorBox = () => {
  const [num, setNum] = useState("");
  const ulRef = useRef(null);
  const [currentActive, setCurrentActive] = useState(null);
  console.log("🚀 ~ file: ColorBox.js ~ line 5 ~ ColorBox ~ num", num);

  console.log(
    "🚀 ~ file: ColorBox.js ~ line 8 ~ ColorBox ~ currentActive",
    currentActive
  );

  function colorFun(e) {
    if (!num && typeof num !== "number") {
      return alert("Enter number in inputbox");
    }
    ulRef.current.childNodes.forEach((each) => {
      setCurrentActive(num);
      if (currentActive === num) {
        ulRef.current.childNodes[num - 1].style.background = "";
        setCurrentActive(null);
        // ulRef.current.childNodes[num - 1].style.background = "green";
        return;
      }
      if (currentActive) {
        ulRef.current.childNodes[currentActive - 1].style.background = "";
      }

      ulRef.current.childNodes[num - 1].style.background = "green";
    });
  }

  return (
    <div>
      <h3>Color Box</h3>
      <div>
        <ul
          ref={ulRef}
          style={{
            listStyle: "none",
            background: "aliceblue",
            border: "1px solid",
            maxWidth: "400px",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "10px",
          }}
        >
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
        <div>
          <div>
            Type num
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <button onClick={(e) => colorFun(e)}>Color num</button>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
