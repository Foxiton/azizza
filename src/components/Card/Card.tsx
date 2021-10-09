import React from 'react'
import styled from 'styled-components';
import * as Io5Icons from "react-icons/io5";
import './Card.scss';

interface ICardProps {
    background: string;
    width?: string;
    height?: string;
    title: string;
    place: string;
}

const Card = ({background, width, height, title, place}: ICardProps) => {
    return (
        <CardContainer width={width} height={height} background={background}>
            <Title>{title}</Title>       
        </CardContainer>
    )
}

export const LargeCard = ({background, title, place}: ICardProps) => {
    return (
        <LargeCardWrapper width="180px" height="260px">
        <CardContainer width="180px" height="260px" background={background} className="large-card" />
            <CardDesc>
                <Title>{title}</Title>
                <Description><Io5Icons.IoLocationOutline className="icon-location"/> {place}</Description>
            </CardDesc>
        </LargeCardWrapper>
    )
}

const CardDesc = styled.div`
    align-self: end;
    margin-left: 10px;
    margin-bottom: 8px;
    position: relative;
    bottom: 50px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: white;
  font-family: "AcuminPro Bold";
`;

const Description = styled.p`
  font-size: 12px;
  color: white;
  font-family: "AcuminPro Light";
  display: flex;
  align-items: center;
`;

const LargeCardWrapper = styled.div.attrs((props: any) => ({
    width: props.width || "90px",
    height: props.height || "150px"
}))`
    background: black;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 10px;
`

const CardContainer = styled.div.attrs((props: any) => ({
    width: props.width || "90px",
    height: props.height || "150px",
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
    cursor: pointer;
    display: flex;
    opacity: 0.7;
`;

export default Card;
