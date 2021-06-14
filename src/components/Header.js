import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "./LoginPage";
const Header = () => (
  <header>
    <h1>Job Tracker</h1>
    <NavLink
      to="/dashboard"
      activeClassName="
    is-active"
      exact={true}
    >
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Job Application
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help Page
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

export default Header;
