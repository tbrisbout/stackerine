import React, { Component } from 'react';
import styled from 'styled-components';

import AppHeader from './components/Header';
import AppBody from './components/Body';
import AppFooter from './components/Footer';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background:
    linear-gradient(rgba(25, 181, 254, 0.6), rgba(246, 36, 89, 0.6)),
    linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1441015401724-70d16b783f5c?dpr=1&auto=format&fit=crop&w=2000&h=1200&q=80&cs=tinysrgb&crop=entropy);
  font-family: 'Roboto', 'Arial';
  color: #f5f7fa;
`;

class App extends Component {
  render() {
    return (
      <Div>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Div>
    );
  }
}

export default App;
