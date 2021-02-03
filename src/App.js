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
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import Links from "./Link/Links";
function App() {
  return (
    <Router>
      <Links />
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route path="/contextAPI" component={ComponentA} />
        <Route path="/student/dashboard" component={StudentDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
