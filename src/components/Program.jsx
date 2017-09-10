import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Section = styled.section`
  font-weight: normal;
  font-size: 40px;
  text-align: center;
`;

export default () => (
  <Section className="App-body">
    <p>Programme</p>
    <Button>Ça m'intéresse</Button>
  </Section>
);