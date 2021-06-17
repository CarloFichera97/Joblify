import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { startLogout } from "./LoginPage";

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  min-height: 9vh;
  background: #354152;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 46px;
  color: white;
  font-style: italic;
  margin-left: 50px;
`;

const HorizontalMenu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 21px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const ToggleIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 700px) {
    display: none;
  }
`;

const LineHorizontalButton = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "30%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  @media (min-width: 700px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 0.5 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <NavigationBar>
        <Title>Joblify</Title>
        <HorizontalMenu>
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="
    active"
              className="nav_inactive_menu"
              exact={true}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/create"
              className="nav_inactive_menu"
              activeClassName="active"
            >
              Create
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/help"
              className="nav_inactive_menu"
              activeClassName="active"
            >
              Help
            </NavLink>
          </li>

          <li>
            <a onClick={startLogout}>Logout</a>
          </li>
        </HorizontalMenu>
        <ToggleIcon onClick={() => toggleNav(!toggle)}>
          <LineHorizontalButton open={toggle} />
          <LineHorizontalButton open={toggle} />
          <LineHorizontalButton open={toggle} />
        </ToggleIcon>
      </NavigationBar>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <li>
            <NavLink
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/dashboard"
              exact={true}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/create"
            >
              Create
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={() => {
                toggleNav(!toggle);
              }}
              to="/help"
            >
              Help
            </NavLink>
          </li>

          <li>
            <a onClick={startLogout}>Logout</a>
          </li>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
