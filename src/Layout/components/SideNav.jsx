import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import colors from "../../colors";

const SideNav = styled.div`
  display: flex;
  flex-flow: column;
  grid-column: 1/2;
  grid-row: 1/3;
  background: #fcfcfc;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

const LogoContainer = styled.div`
  height: 10rem;
  background: #00bbd4;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 2rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled(Link)`
  padding: 1rem;
  color: ${colors.black};
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.15);
    font-size: 2rem;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background: rgba(0, 0, 0, 0.15);
  border: none;
  padding: 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
`;

const SideMenu = () => (
  <SideNav>
    <LogoContainer>
      <Link to="/">Utillio</Link>
    </LogoContainer>
    <Menu>
      <MenuItem to="/help">Help</MenuItem>
    </Menu>
    <LogoutButton>Logout</LogoutButton>
  </SideNav>
);

export default SideMenu;
