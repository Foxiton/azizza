import React from 'react';
import logo from '../../assets/logo.svg';

import styled from 'styled-components';

import './Dashboard.scss';

function App() {
  return (
      <div className="app-main-content-wrapper scrollable">
        <div className="main-app-content-container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
          <Title>Hello World!</Title>
        </div>
      </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default App;
