import React from 'react';
import styled from 'styled-components';

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

const Link = styled.li`
  display: inline;
  margin: 20px;
  font-size: 20px;
  list-style: none;
  text-transform: uppercase;
`;

export default () => (
  <Header>
    <img src={logo} style={{ height: 70 }} alt="logo" />
    <nav>
      <ul>
        <Link>Programme</Link>
        <Link>FAQ</Link>
      </ul>
    </nav>
  </Header>
);
