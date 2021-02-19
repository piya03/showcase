import React, { useState, useEffect } from "react";

const StopTimer = () => {
  const [count, setCount] = useState(0);
  console.log("StopTimer -> count", count);
  let myInterval;

  function startTimer() {
    myInterval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }
  function stopTimerFun() {
    console.log("stopTimer -> stopTimer", stopTimerFun);

    clearInterval(myInterval);
  }
  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     console.log("clean up");
  //     clearInterval(myInterval);
  //   };
  // }, [count]);
  return (
    <div>
      <p>Timer {count} </p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimerFun}>Stop Timer</button>
    </div>
  );
};

export default StopTimer;
