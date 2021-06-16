import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "./LoginPage";
import { FiCodesandbox } from "react-icons/fi";
const Header = () => (
  <div className="header__container">
    <i className="header__icon">
      <FiCodesandbox />
    </i>
    <header>
      <nav>
        <ul className="menuItems">
          <li></li>
          <h1 className="header__title">Joblify</h1>
          <li>
            <a>
              {" "}
              <NavLink
                to="/dashboard"
                activeClassName="
    is-active"
                exact={true}
              >
                Dashboard
              </NavLink>
            </a>
          </li>

          <li>
            <a>
              <NavLink to="/create">Create Job Application</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/help" activeClassName="is-active">
                Help Page
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <a onClick={startLogout}>Logout</a>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
