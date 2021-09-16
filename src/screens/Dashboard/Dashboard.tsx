import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';

import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";

import { destinationSuggestions } from '../../globals/constants/dashboardData';
import { LargeCard } from '../../components/Card/Card';
import imageOnTop from '../../assets/onTop.jpg'
import './Dashboard.scss';


function App() {
  const appContainerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const [appContainerWidth, setAppContainerWidth] = useState<number | undefined>(0);

  const resizeHandler = useDebouncedCallback(() => {
    setAppContainerWidth(0);
    setAppContainerWidth(appContainerRef.current?.clientWidth)          
  }, 200);

  useEffect(() => {
    setAppContainerWidth(appContainerRef.current?.clientWidth);
    window.addEventListener('resize', resizeHandler)
    return (() => {
      window.removeEventListener('resize', resizeHandler);
    })
  }, [resizeHandler]);

  return (
      <div className="app-main-content-wrapper scrollable">
        <div className="main-app-content-container" ref={appContainerRef}>
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
          <DestSuggestionWrapper
            className="destination-suggestion-container scrollable"
            width={appContainerWidth}
            >
              {
                destinationSuggestions.map((item, index) => (
                  <LargeCard key={index} background={imageOnTop} title={item.title} place={item.place}/>                  
                ))
              }
          </DestSuggestionWrapper>
        </div>
      </div>
  );
}

const DestSuggestionWrapper = styled.div.attrs((props: any) => ({
  width: props.width
}))`
  width: ${props => props.width}px;
`;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default App;
