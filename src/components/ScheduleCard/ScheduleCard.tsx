import React from 'react'
import styled from 'styled-components';
import * as IoIcons from "react-icons/io";
import './ScheduleCard.scss';

interface ICardProps {
    background: string;
    size?: {
        width: string;
        height: string;
    },
    title: string;
    scheduledDates: string;
}

const ScheduleCard = ({background, size, title, scheduledDates}: ICardProps) => {
    return (
        <div className="scheduleCard-container">
            <div style={{backgroundColor: 'grey', borderRadius: '10px'}}>
            <CardContainer width={size?.width} height={size?.height} background={background} />
            </div>
            <div className="scheduleCard-info-container">
                <h3>{title}</h3>
                <span><IoIcons.IoMdCalendar className="scheduleCard-icon-calender" />{scheduledDates}</span>
            </div>
        </div>
    )
}

const CardContainer = styled.div.attrs((props: any) => ({
    width: props.width || "60px",
    height: props.height || "60px",
    background: props.background || null
}))`
    background: palevioletred;
    height: ${props => props.height};
    width: ${props => props.width};
    min-height: ${props => props.height};
    min-width: ${props => props.width};
    border-radius: 10px;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    opacity: 0.9;
`;

export default ScheduleCard;
