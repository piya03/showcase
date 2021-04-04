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
    console.log("stopTimer -> stopTimer");

    clearInterval(myInterval);
  }

  useEffect(() => {
    if (count > 0) {
      startTimer();
    }
    return () => {
      console.log("clear me");
      clearInterval(myInterval);
    };
  }, [count]);
  return (
    <div>
      <p>Timer {count} </p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimerFun}>Stop Timer</button>
    </div>
  );
};

export default StopTimer;
