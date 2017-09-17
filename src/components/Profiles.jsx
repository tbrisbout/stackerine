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

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin-bottom: 10%;
  }

  i {
   font-size: 2.5em;
   padding: 5px;
  }
`;


const sections = {
  intro: (
    <div>
      <h3>3 bonnes raisons de recruter une Stackerine&nbsp;:</h3>
      <p>Un profil formé sur les technologies du moment et les bonnes pratiques</p>
      <p>Une addition qui permet d'augmenter le niveau global d'une équipe</p>
      <p>Un suivi et support technique du profil par nos experts</p>
      <Button linkTo="/profils/details">Plus de détails</Button>
    </div>
  ),

  details: (
    <div>
      <p>Les Stackerines sont opérationnelles sur les langages et frameworks suivants&nbsp;:</p>
      <ul>
        <li><i className="devicon-javascript-plain" title="JavaScript" /></li>
        <li><i className="devicon-react-original-wordmark" title="React" /></li>
        <li><i className="devicon-html5-plain-wordmark" title="HTML5" /></li>
        <li><i className="devicon-css3-plain-wordmark" title="CSS3" /></li>
      </ul>
      <p>Elles sont formées pour utiliser efficacement les outils suivants&nbsp;:</p>
      <ul>
        <li><i className="devicon-git-plain" title="git" /></li>
        <li><i className="devicon-atom-original" title="Atom" /></li>
        <li><i className="devicon-ubuntu-plain-wordmark" title="Ubuntu / Linux" /></li>
        <li><i className="devicon-docker-plain-wordmark" title="Docker" /></li>
      </ul>
      <Button linkTo="/profils/details">C'est mon besoin&nbsp;</Button>
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
