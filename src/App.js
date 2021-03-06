import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";
import Paper from "./TestPaper/Paper";
import UserForm from "./UserForm/UserForm";
import ComponentA from "./Context/ComponentA";
import StopTimer from "./StopTimer/StopTimer";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import Watch from "./Watch/Watch";
import GenerateRowCol from "./GenerateRowCol/GenerateRowCol";
import ColorBox from "./ColorBox/ColorBox";
import Links from "./Link/Links";
function App() {
  return (
    <div>
      <div></div>
      <Router>
        <Links />
        <Switch>
          <Route exact path="/" component={UserForm} />
          <Route path="/contextAPI" component={ComponentA} />
          <Route path="/stoptimer" component={StopTimer} />
          <Route path="/student/dashboard" component={StudentDashboard} />
          <Route path="/watch" component={Watch} />
          <Route path="/generate/row/col" component={GenerateRowCol} />
          <Route path="/colorbox" component={ColorBox} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import Watch from "./Watch/Watch";
// import "./App.css";

// function App() {

//   const [col, setCol] = useState(0);
//   const [row, setRow] = useState(0);
//   const [tabledata, setTableData] = useState([]);

//   const [showNo, setShowNo] = useState("");

//   const getUniqueKeyFromArrayIndex = (rowNum, columnNum) => {
//     return `${rowNum}-${columnNum}`;
//   };

//   function isFloat(n) {
//     return Number(n) === n && n % 1 !== 0;
//   }

//   const generate = (row, col) => {
//     if (row < 1 || col < 1) {
//       alert("Row and Col cannot be zero");

//       return;
//     }
//     if (isFloat(row) || isFloat(col)) {
//       alert("Float Number are not allowed");
//       return;
//     }
//     let table = [];
//     // Outer loop to create parent

//     let count = 1;
//     for (let i = 0; i < row; i++) {
//       let children = [];
//       //Inner loop to create children
//       for (let j = 0; j < col; j++) {
//         let val = count;
//         children.push(
//           <td name={getUniqueKeyFromArrayIndex(i, j)} defaultValue="TextInput">
//             <button
//               onClick={() => {
//                 setShowNo(val);
//               }}
//             >
//               {count++}
//             </button>
//           </td>
//         );
//       }
//       table.push(<tr key={i}>{children}</tr>);
//     }
//     setTableData(table);
//     return table;
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="left_box">
//           <h2>Block Display</h2>
//           <table>
//             <tbody>{tabledata}</tbody>
//           </table>
//           <div>
//             <h2>Total Blocks : {row * col}</h2>
//           </div>
//         </div>
//         <div>
//           <h2>Block Config</h2>
//           <div className="row_col">
//             <div className="row">
//               <div> Row :</div>
//               <input
//                 type="number"
//                 value={row}
//                 onChange={(e) => setRow(e.target.value)}
//               />
//             </div>

//             <div className="col">
//               <div> Column : </div>
//               <input
//                 type="number"
//                 value={col}
//                 onChange={(e) => setCol(e.target.value)}
//               />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => generate(row, col)}>Generate</button>
//             <button
//               onClick={() => {
//                 setRow(0);
//                 setCol(0);
//                 setTableData([]);
//                 setShowNo("");
//               }}
//             >
//               Clear
//             </button>
//           </div>
//           <div></div>
//           <div>
//             <h1>Selected Block</h1>
//             <div>{showNo}</div>
//           </div>
//         </div>
//       </div>

//       {/* //////////// */}
//       <Watch />
//     </div>
//   );
// }

// export default App;
