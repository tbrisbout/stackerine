import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  flex: 1;
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin-top: 10%;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 20%;
  }
`

export default () => (
  <Section>
    <h1>Bravo&nbsp;!</h1>
    <p>Vous venez de faire un pas concret pour changer de vie.</p>
    <p>Nous vous contacterons très vite pour en discuter&nbsp;!</p>
  </Section>
);
