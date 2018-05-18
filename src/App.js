import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import styled from 'styled-components'

import UserForm from './components/UserForm'
import Cards from './components/Cards'
import CreditTotal from './components/CreditTotal'

const Container = styled.div`
  display: flex;
  padding: 2rem;
  > div {
    flex: 1;
  }
`

const Header = styled.div`
  width: 100%;
  background: ${p => p.theme.darkDefault};
  color: ${p => p.theme.white};
  padding: 1rem 1.4rem;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>Get your available credit</Header>
        <Container>
          <UserForm />
          <div>
            <Cards />
            <CreditTotal />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
