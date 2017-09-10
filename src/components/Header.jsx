import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../stackerine-logo.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
  width: 80%;
  box-shadow: 0 1px 0 rgba(211, 214, 219, 0.3);
`;

const NavItem = styled.li`
  display: inline;
  margin: 20px;
  font-size: 20px;
  list-style: none;
  text-transform: uppercase;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export default () => (
  <Header>
    <Link to="/">
      <img src={logo} style={{ height: 70 }} alt="logo" />
    </Link>
    <nav>
      <ul>
        <NavItem><Link to="/programme">Programme</Link></NavItem>
        <NavItem><Link to="/faq">FAQ</Link></NavItem>
      </ul>
    </nav>
  </Header>
);
