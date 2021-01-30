import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Resources from "./Resources";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/functionalcomponent">Functional Component</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
