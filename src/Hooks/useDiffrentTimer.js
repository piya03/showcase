import React, { useEffect, useState } from "react";

function useDiffrentTimer(props) {
  const { initialVal = new Date(), offset } = props || {};
  let d = initialVal;
  console.log("d", d);
  let d1 = d.getHours() + (offset?.hr || 0);
  let d2 = d.getMinutes() + (offset?.min || 0);
  let d3 = d.getSeconds() + (offset?.sec || 0);

  const [time, setTime] = useState({
    hr: d1,
    min: d2,
    sec: d3,
  });

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      let d = new Date();
      let d1 = d.getHours() + (offset?.hr || 0);
      let d2 = d.getMinutes() + (offset?.min || 0);
      let d3 = d.getSeconds() + (offset?.sec || 0);

      setTime({
        hr: d1,
        min: d2,
        sec: d3,
      });
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return [time];
}

export default useDiffrentTimer;
