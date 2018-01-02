import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
  
  @media (max-width: 700px) {
    font-size: 50px;
  }
`;

const BottomLink = styled.footer`
  font-size: 12px;

  a {
    color: white;
  }
`

export default () => (
  <Section className="App-body">
    <p>Changez de vie en devenant développeuse web&nbsp;!</p>
    <Button linkTo="/programme/intro">Ça m'intéresse</Button>
    <BottomLink>
      <Link to="/profils/intro">Je recherche des profils pour une mission</Link>
    </BottomLink>
  </Section>
);
