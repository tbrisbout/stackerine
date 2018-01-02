import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Dollar from '../assets/dollar.svg';
import Career from '../assets/career.svg';
import Web from '../assets/web.svg';
import WomanLess from '../assets/womanLess.svg';
import WomanLooking from '../assets/womanLooking.svg';
import WomanPower from '../assets/womanPower.svg';
import Cdi from '../assets/cdi.svg';
import Learning from '../assets/learning.svg';
import Meeting from '../assets/meeting.svg';
import Growing from '../assets/growing.svg';
import Workgroup from '../assets/workGroup.svg';
import Mission from '../assets/mission.svg';

const Section = styled.section` 
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 50px;
  
  @media (min-width: 700px) {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }

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
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
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

const Title = styled.h3`
  padding: 20px 0;
  text-transform: uppercase;
`


const sections = {
  intro: (
    <div>
      <Title>Votre profil</Title>
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
      <Title>Notre constat</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={WomanLess} alt={"woman less"}/>
          <p>Les femmes sont sous-représentées dans l’IT</p>
        </ItemContent>
        <ItemContent>
          <Icon src={WomanLooking} alt={"woman looking"}/>
          <p>Les recruteurs recherchent des femmes qualifiées</p>
        </ItemContent>
        <ItemContent>
          <Icon src={WomanPower} alt={"woman power"}/>
          <p>Les femmes disposent d’autant de capacités que les hommes</p>
        </ItemContent>
      </SectionContainer>
      <Button linkTo="/programme/intro">⬅ Retour</Button>
      <Button linkTo="/programme/process">Et du coup&nbsp;?</Button>
    </div>
  ),

  process: (
    <div>
      <Title>Le processus</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Meeting} alt={"meeting"}/>
          <p>Nous nous rencontrons pour discuter de votre parcours, de vos attentes et de vos envies.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Learning} alt={"learning"}/>
          <p>Si cela fonctionne, nous vous formons pendant 100 jours au métier de développeur web.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Cdi} alt={"cdi"}/>
          <p>Tout cela avec une embauche en CDI qui intervient dès le début de la formation.</p>
        </ItemContent>
      </SectionContainer>
      <Button linkTo="/programme/faits">⬅ Retour</Button>
      <Button linkTo="/programme/missions">Et ensuite&nbsp;?</Button>
    </div>
  ),

  missions: (
    <div>
      <Title>Une fois formée</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Workgroup} alt={"Work group"}/>
          <p>La formation vous prepare à travailler dans une mission au sein d'une équipe.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Mission} alt={"Mission"}/>
          <p>Nous sélectionnons des missions de qualités en prestation pour des clients.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Growing} alt={"growing"}/>
          <p>Nous faisons un suivi régulier de l'évolution technique et salariale.</p>
        </ItemContent>
      </SectionContainer>
      <Button linkTo="/programme/process">⬅ Retour</Button>
      <Button linkTo="/programme/inscription">Où je m'inscris&nbsp;?</Button>
    </div>
  ),

  inscription: (
    <div>
      <p>Entrez votre email et nous vous contacterons pour en discuter...</p>
      <Subscribe method="POST" action="//formspree.io/x4s6b9k8z8f5d6p8@stackerine.slack.com">
        <input type="email" name="email" placeholder="Mon email" required/>
        <input type="hidden" name="_next" value="//tbrisbout.github.io/stackerine/merci"/>
        <button type="submit">Go&nbsp;!</button>
      </Subscribe>
    </div>
  )
}

export default ({match: {params: {section}}} = {match: {params: {}}}) => (
  <Section className="App-body">
    {sections[section || 'intro']}
  </Section>
);
