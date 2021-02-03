import React, { useEffect, useState } from "react";
import CommonCheckBox from "../CommonComponent/CommonCheckBox";

const Paper = () => {
  const [odd, setOdd] = useState([]);
  useEffect(() => {
    let options = [
      { select: false, label: "APPLE", value: "apple" },
      { select: false, label: "BANANA", value: "banana" },
      { select: false, label: "GRAPES", value: "grapes" },
      { select: false, label: "GRASS", value: "grass" },
    ];
    setOdd(options);
  }, []);
  console.log("Paper -> odd", odd);
  return (
    <div>
      <div>Answer the Correct question in CheckBox</div>
      <p>Which one odd ?</p>
      {odd?.map((each, index) => {
        return (
          <CommonCheckBox
            key={index}
            labelval={each?.label}
            // value={each?.value}
            //onChange={(e) => {
            // let checked = e.target.checked;

            //   setOdd(
            //     odd.map((d, i) => {
            //       if (d.value === each?.value) {
            //         d.select = checked;
            //       }
            //       return d;
            //     })
            //   );
            // }}
            checked={each?.select}
          />
        );
      })}
      {odd}
    </div>
  );
};

export default Paper;
