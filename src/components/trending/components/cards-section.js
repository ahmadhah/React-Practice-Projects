import React from 'react'
import styled from 'styled-components';
import Card from './card'
import { data } from './data'

function CardsSection() {
    return (
        <CardsContainer >
            {data.map((item, index) => < Card key={index} price={item.price} img={item.img} name={item.name} para={item.para} />)}
        </CardsContainer>
    )
}

export default CardsSection

const CardsContainer = styled.div`
// background-color: black;
    height: auto;
    width: 100%;
    // background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 700px){
        flex-direction: column;
        margin-top:20px;

    }
`