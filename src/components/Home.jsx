import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Button from './Button';

const Section = styled.section`
  font-weight: normal;
  font-size: 40px;
  text-align: center;
`;

export default () => (
  <Section className="App-body">
    <p>Changez de vie en devenant développeuse web&nbsp;!</p>
    <Link to="/programme">
      <Button>Ça m'intéresse</Button>
    </Link>
  </Section>
);
