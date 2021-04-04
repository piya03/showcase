import React, { useState, useEffect } from "react";

const GenerateRowCol = () => {
  const [row, setRow] = useState("");
  const [col, setCol] = useState("");
  const [tableData, setTableData] = useState([]);
  const [clickedVal, setClickedVal] = useState("");
  const [total, setTotal] = useState(0);
  function generateFun(passRow, passCol) {
    let table = [];
    let count = 1;
    for (let i = 0; i < passRow; i++) {
      let children = [];
      for (let j = 0; j < passCol; j++) {
        children.push(
          <td>
            <button onClick={(e) => setClickedVal(e.target.innerHTML)}>
              {count}
            </button>
          </td>
        );
        count++;
      }
      table.push(<tr key={count}>{children}</tr>);
    }
    setTableData(table);
    setClickedVal("");
    setRow("");
    setCol("");
    setTotal(row * col);
  }

  return (
    <div>
      <h3>Generate Row Col</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            border: "1px solid",
            minWidth: "300px",
            minHeight: "300px",
          }}
        >
          <table>
            <tbody>{tableData}</tbody>
          </table>
          <h3>Total -- {total}</h3>
        </div>
        <div className="">
          <div>
            <div>
              Row{" "}
              <input
                type="text"
                value={row}
                onChange={(e) => setRow(e.target.value)}
              />
            </div>
            <div>
              Column{" "}
              <input
                type="text"
                value={col}
                onChange={(e) => setCol(e.target.value)}
              />
            </div>{" "}
          </div>
          <button onClick={() => generateFun(row, col)}>Generate</button>
          <button
            onClick={() => {
              setTableData([]);
              setTotal("");
            }}
          >
            Clear
          </button>

          <h2>{clickedVal}</h2>
        </div>
      </div>
    </div>
  );
};

export default GenerateRowCol;
