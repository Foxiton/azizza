import React from 'react';
import logo from '../../assets/logo.svg';
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import styled from 'styled-components';

import Card, { LargeCard } from '../../components/Card/Card';
import './Dashboard.scss';

import imageOnTop from '../../assets/onTop.jpg'

function App() {
  return (
      <div className="app-main-content-wrapper scrollable">
        <div className="main-app-content-container">
          <header>
            <h1>Hello, Jeremy! 👋</h1>
            <div>
              <FiIcons.FiSearch className="search-icon" size="20px" color="darkgrey"/>
              <input placeholder="Search Destination..." type="text" />
            </div>
            <button className="notification-icon-wrapper badge">
              <IoIcons.IoIosNotificationsOutline />
            </button>
          </header>
          <p className="welcome-text">Welcome back and explore the world</p>
          {/* <div className="grid-test" contentEditable>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div> */}
          <div className="destination-suggestion-container scrollable">
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
            <LargeCard background={imageOnTop} title="Test 123"/>
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
