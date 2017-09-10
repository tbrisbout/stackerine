import React from 'react';
import styled from 'styled-components';

import Fade from './Fade';
import Button from './Button';

const Section = styled.section`
  font-weight: normal;
  font-size: 40px;
  text-align: center;
`;

export default () => (
  <Fade>
    <Section className="App-body">
      <p>Questions</p>
      <Button>Ça m'intéresse</Button>
    </Section>
  </Fade>
);
