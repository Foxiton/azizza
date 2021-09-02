import React from 'react';

import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import UserCard from "../UserCard/UserCard";

import './RightSidebar.scss';
import logo from "../../assets/treva.png";


const RightSidebar = () => {
    return (
        <>
        <aside className='right-sidebar'>
          <UserCard/>
        </aside>
    </>
    )
}

export default React.memo(RightSidebar);
