import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <header className="App-header">
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
        </header>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route path='/' />
          <Route path='/reports' />
          <Route path='/products' />
        </Switch>
      </Router>
    </div>
  );
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default App;
