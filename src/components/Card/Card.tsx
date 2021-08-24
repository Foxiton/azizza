import React from 'react'
import styled from 'styled-components';
import './Card.scss';

interface ICardProps {
    background: string;
    size: {
        width: string;
        height: string;
    }
}

const Card = ({background, size}: ICardProps) => {
    return (
        <CardContainer width={size?.width} height={size?.height} background={background}>
            <Title>Test123 Cec</Title>       
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
    border-radius: 10px;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
`;

export default Card;
