import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Section = styled.section`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;

  p {
    margin: 10%;
  }
`;

const sections = {
  intro: (
    <div>
      <p>Vous en avez assez d’être sous-payé et vous voulez avoir une vraie carrière&nbsp;?</p>
      <p>Vous voulez vous investir dans un secteur qui ne connaît pas la crise&nbsp;?</p>
      <p>Parce que le secteur de l’IT vous concerne aussi&nbsp;!</p>
      <Button linkTo="/programme/faits">Dites m'en plus</Button>
    </div>
  ),

  faits: (
    <div>
      <p>Nous avons fait le constat suivant&nbsp;:</p>
      <p>les femmes sont sous-représenté dans l’IT</p>
      <p>les recruteurs recherchent des femmes qualifiées</p>
      <p>les femmes disposent d’autant de capacités que les hommes</p>
      <Button linkTo="/programme/process">Et du coup&nbsp;?</Button>
    </div>
  ),

  process: (
    <div>
      <p>1 - Entretien de recrutement</p>
      <p>2 - Embauche</p>
      <p>3 - 100 jours de formation</p>
      <p>4 - Travail dans une equipe de développement</p>
      <p>5 - Evolution technique et salariale</p>
      <Button linkTo="/programme/process">Où je m'inscris&nbsp;?</Button>
    </div>
  )
}

export default (
  { match: { params: { section } } } = { match: { params: {} } }
) => (
  <Section className="App-body">
    {sections[section || 'intro']}
  </Section>
);
