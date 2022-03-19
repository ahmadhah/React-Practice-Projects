import React from 'react'
import styled from 'styled-components';
import Card from './card'
function CardsSection() {
    return (
        <CardsContainer >
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
    )
}

export default CardsSection

const CardsContainer = styled.div`
    height: 65%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`