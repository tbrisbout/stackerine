import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const color = '#f5f7fa';

const Button = styled.button`
  width: 200px;
  padding: 10px;
  border: 2px solid ${color};
  border-radius: 24px;
  background-color: transparent;
  color: ${color};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${color};
    color: rgba(246, 36, 89, 0.8);
  }

  &:focus {
    outline: none;
  }
`

export default ({linkTo, children}) =>
  <Link to={linkTo}>
    <Button>{children}</Button>
  </Link>
