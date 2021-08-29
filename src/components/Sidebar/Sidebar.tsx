import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import styled from 'styled-components';
import './Sidebar.scss';

import logo from "../../assets/treva.png";


const Sidebar = () => {
    return (
        <>
        <nav className={'nav-menu active'}>
          <Link to='/'>
            <img src={logo} alt='Company Logo' className='nav-logo'/>
          </Link>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`nav-text ${item.cname}`}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
    )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font: 
`;

const CardContainer = styled.div.attrs((props: any) => ({
    width: props.width || "90px",
    height: props.height || "150px",
    background: props.background || null
}))`
    background: palevioletred;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 10px;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
`;

export default Sidebar;
