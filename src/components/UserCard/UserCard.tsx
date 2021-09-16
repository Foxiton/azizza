import React from 'react';

import './UserCard.scss';
import earth from "../../assets/earth.png";


const UserCard = () => {
    return (
      <div className="userCard-wrapper">
        <img className="user-avatar" src={earth} alt="User"/>
        <div className="user-info">
          <p className="userinfo-lable-name">Jeremy Zuck</p>
          <p className="userinfo-lable-description">Travel Enthusiast</p>
        </div>
      </div>
    )
}

export default React.memo(UserCard);
