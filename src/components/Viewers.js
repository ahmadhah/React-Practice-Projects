import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="slider-1" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="slider-1" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="slider-1" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="slider-1" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="slider-1" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`

    //mean padding to bottom
    margin-top:30px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(5, minmax(0, 1fr));
    padding:30px 0px 26px;
`

const Wrap = styled.div`
    border:3px solid rgba(249,249,249,0.1);
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        border: 4px solid rgba(249,249,249,0.8);
    }
`