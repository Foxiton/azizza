import React from 'react';

import { Link } from 'react-router-dom';

import { ScheduleData } from '../../globals/constants/sidebarData';

import UserCard from "../UserCard/UserCard";

import './RightSidebar.scss';
// import imageRiver from "../../assets/river.jpg";
import ScheduleCard from "../ScheduleCard/ScheduleCard";


const RightSidebar = () => {
    return (
        <>
        <aside className='right-sidebar'>
          <UserCard/>
          <h2 className="title-schedule">My Schedule</h2>
          <div className="schedule-container">
            {ScheduleData.map((item,index) => {
              return (
                <ScheduleCard key={index} background={item.img} title={item.title} scheduledDates={item.dates}/>
              )
            })}
          </div>
        </aside>
    </>
    )
}

export default React.memo(RightSidebar);
