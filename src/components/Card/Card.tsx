import React from 'react'
import styled from 'styled-components';
import './Card.scss';

interface ICardProps {
    background: string;
    width?: string;
    height?: string;
    title: string;
}

const Card = ({background, width, height, title}: ICardProps) => {
    return (
        <CardContainer width={width} height={height} background={background}>
            <Title>{title}</Title>       
        </CardContainer>
    )
}

export const LargeCard = ({background, title}: ICardProps) => {
    return (
        <CardContainer width="180px" height="260px" background={background}>
            <Title>{title}</Title>       
        </CardContainer>
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
    min-height: ${props => props.height};
    min-width: ${props => props.width};
    border-radius: 10px;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

export default Card;
