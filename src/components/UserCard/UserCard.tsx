import React from 'react';

import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import './UserCard.scss';
import logo from "../../assets/treva.png";


const UserCard = () => {
    return (
      <>
        <div className="usercard-wrapper">
          <p>Jeremy Zuck</p>
          <p>Travel Enthusiast</p>
        </div>
      </>
    )
}

export default React.memo(UserCard);
