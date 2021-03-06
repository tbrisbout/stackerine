import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  opacity: 0.5;
  box-shadow: 0 -1px 0 rgba(211, 214, 219, 0.3);

  @media (max-width: 700px) {
    display: none;
  }
`;

export default () => (
  <Footer>
    <p>Thomas & Jonathan</p>
    <p>Copyright 2017 Stackerine</p>
  </Footer>
);
