import React, { useEffect, useState } from "react";
import "./style.css";
import ClockImg from "./clock.png";
import useDiffrentTimer from "../Hooks/useDiffrentTimer";
function Clock({ label, time }) {
  const { hr, min, sec } = time;
  const secDeg = (360 / 60) * sec;
  const minDeg = (360 / (60 * 60)) * (min * 60 + sec);
  const hrDeg = (360 / (12 * 60 * 60)) * ((hr % 12) * 60 * 60 + min * 60 + sec);
  console.log(secDeg, "secDeg");
  console.log(minDeg, "minDeg");
  console.log(hrDeg, "hrDeg");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <label
        style={{
          marginBottom: "30px",
          fontSize: "30px",
          fontFamily: "cursive",
          fontWeight: "bold",
          letterSpacing: "0.07em",
        }}
      >
        {label}
      </label>
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundImage: `url("${ClockImg}")`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="box">
          <div
            className="hour"
            style={{
              transform: `rotate(${hrDeg}deg)`,
            }}
          ></div>
          <div
            className="min"
            style={{
              transform: `rotate(${minDeg}deg)`,
            }}
          ></div>
          <div
            className="sec"
            style={{
              transform: `rotate(${secDeg}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

//Implememt a clock for  India, washinton D.C and Canberra,

// India

// Australia = India  +  5 hours and 30 minutes

// Washington DC = India - 10 hours and 30 minutes

export default function App() {
  const [time] = useDiffrentTimer();

  const [time2] = useDiffrentTimer({
    offset: {
      hr: 5,
      min: 30,
    },
  });

  const [time3] = useDiffrentTimer({
    offset: {
      hr: -10,
      min: -30,
    },
  });

  console.log(time);
  return (
    <div className="App">
      <h1>World Time Clocks</h1>
      <Clock label="India" time={time} />
      <Clock label="Washinton D.C" time={time3} />
      <Clock label="Canberra" time={time2} />
    </div>
  );
}
