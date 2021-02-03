import React, { useEffect, useState } from "react";
import { ServerData } from "./ServerData";
const StudentDashboard = () => {
  const [data, setData] = useState(ServerData);
  useEffect(() => {
    setData(
      data.map((each) => {
        return {
          ...each,
          selectedPerson: false,
        };
      })
    );
  }, []);
  console.log("StudentDashboard -> data", data);
  return (
    <div>
      <h2>StudentDashboard</h2>
      <table>
        <thead>
          <tr>
            <input
              type="checkbox"
              onChange={(e) => {
                let checked = e.target.checked;
                setData(
                  data.map((inside) => {
                    inside.selectedPerson = checked;
                    return inside;
                  })
                );
              }}
              //checked={selectAll}
            />

            <th>Roll No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>subject</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((each) => {
              return (
                <tr key={each.rollNo}>
                  <input
                    onChange={(e) => {
                      let checked = e.target.checked;
                      setData(
                        data.map((indata) => {
                          if (indata.rollNo === each.rollNo) {
                            indata.selectedPerson = checked;
                          }
                          return indata;
                        })
                      );
                    }}
                    type="checkbox"
                    checked={each.selectedPerson}
                  />
                  <td>{each?.rollNo}</td>
                  <td>{each?.name}</td>
                  <td>{each?.class}</td>
                  <td>{each?.subject}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
