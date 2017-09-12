import React from 'react';
import styled from 'styled-components';

import Fade from './Fade';
import Button from './Button';

const Section = styled.section`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;

  p {
    margin: 10%;
  }
`;

export default () => (
  <Fade>
    <Section className="App-body">
      <p>Programme</p>
      <Button>Ça m'intéresse</Button>
    </Section>
  </Fade>
);
