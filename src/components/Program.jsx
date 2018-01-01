import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Dollar from '../assets/dollar.svg';
import Career from '../assets/career.svg';
import Web from '../assets/web.svg';

const Section = styled.section` 
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  top: 50%;
  position: relative;
  transform: translateY(-50%);

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
    color: white;

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
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
`;

const ItemContent = styled.div`
    display: flex;
    flex: 1 1 33%;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
`


const Icon = styled.img`
  width: 100px;
  height: 100px;
`;


const sections = {
  intro: (
    <div>
      <SectionContainer>
        <ItemContent>
          <Icon src={Career} alt={"career"}/>
          <p>Vous en avez assez d’être sous-payé et vous voulez avoir une vraie carrière&nbsp;?</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Dollar} alt={"dollar"}/>
          <p>Vous voulez vous investir dans un secteur qui ne connaît pas la crise&nbsp;?</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Web} alt={"web"}/>
          <p>Parce que le secteur de l’IT vous concerne aussi&nbsp;!</p>
        </ItemContent>
      </SectionContainer>
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
      <p>Tout cela avec une embauche en CDI qui intervient dès le début de la formation.</p>
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
      <Subscribe method="POST" action="//formspree.io/x4s6b9k8z8f5d6p8@stackerine.slack.com">
        <input type="email" name="email" placeholder="Mon email" required />
        <input type="hidden" name="_next" value="//tbrisbout.github.io/stackerine/merci" />
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
