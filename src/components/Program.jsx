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

const Subscribe = styled.form`
  input {
    height: 36px;
    background: transparent;
    border: 1px solid white;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    font-size: 22px;
    text-align: center;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
      border-color: #f76363;
    }
  }

  button {
    height: 40px;
    width: 80px;
    border: none;
    background: white;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
    font-size: 22px;
    text-align: center;
    color: #f76363;
    cursor: pointer;
  }
`

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
      <p>Les femmes sont sous-représentées dans l’IT</p>
      <p>Les recruteurs recherchent des femmes qualifiées</p>
      <p>Les femmes disposent d’autant de capacités que les hommes</p>
      <Button linkTo="/programme/process">Et du coup&nbsp;?</Button>
    </div>
  ),

  process: (
    <div>
      <p>Nous nous rencontrons pour discuter de votre parcours, de vos attentes et de vos envies.</p>
      <p>Si cela fonctionne, nous vous formons pendant 100 jours au métier de développeur web.</p>
      <p>Tout cela avec une embauche en CDI qui intervient avant le milieu de la formation.</p>
      <Button linkTo="/programme/missions">Et ensuite&nbsp;?</Button>
    </div>
  ),

  missions: (
    <div>
      <p>La formation vous prepare à travailler dans une mission au sein d'une équipe.</p>
      <p>Nous sélectionnons des missions de qualités en prestation pour des clients.</p>
      <p>Nous faisons un suivi régulier de l'évolution technique et salariale.</p>
      <Button linkTo="/programme/inscription">Où je m'inscris&nbsp;?</Button>
    </div>
  ),

  inscription: (
    <div>
      <p>Entrez votre email et nous vous contacterons pour en discuter...</p>
      <Subscribe method="POST" action="http://formspree.io/e3h6j0o0v4j5w3g6@stackerine.slack.com">
        <input type="email" name="email" placeholder="Mon email" required />
        <button type="submit">Go&nbsp;!</button>
      </Subscribe>
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
