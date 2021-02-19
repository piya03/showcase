import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/">
        <div>Form</div>
      </Link>
      <Link to="/contextAPI">
        <div>Context API</div>
      </Link>
      <Link to="/stopTimer">
        <div>Stop Timer</div>
      </Link>
      <Link to="/student/dashboard">
        <div>Student Dashboard</div>
      </Link>
    </div>
  );
};

export default Links;
