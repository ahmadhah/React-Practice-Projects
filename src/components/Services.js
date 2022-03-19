import React from 'react'
import styled from 'styled-components';

function Services() {
    return (
        <Container>
            <h1>What Can We Help You Find?</h1>
            <CardContainer>
                <Card>
                    <img src="/imgs/icon 01.png" alt="icon" />
                    <h2>Buy a home</h2>
                    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
                </Card>
                <Card>
                    <img src="/imgs/icon 02.png" alt="icon" />
                    <h2>Rent a home</h2>
                    <p>With 35+ filters and custom keyword search, Trulia can help you
                        find a home.</p>
                </Card>
                <Card>
                    <img src="/imgs/icon 03.png" alt="icon" />
                    <h2>See neighborhoods</h2>
                    <p>With more neighborhood insights than any other real estate
                        website.</p>
                </Card>
            </CardContainer>
        </Container>
    )
}

export default Services

const Container = styled.div`
    height: 50vh;
    margin-bottom: 80px;
    // background-color: pink;
    max-width: 100%;
    padding:5%;
    h1{
        text-align: center;
        font-size: 2.5rem;
    }
`
const CardContainer = styled.div`
    height: 70%;
    // background-color: blue;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
`

const Card = styled.div`
    height: 100%;
    // background-color: yellow;
    width: 23%;
    text-align: center;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    img{
        height: 30%;
        width: 30%;
        object-fit: contain;
    }
    p{
        width: 70%;
        font-size: 0.9rem;
    }
    h2{
        font-size: 1.5rem;
        font-weight: 600;
    }
    &:hover {
        transform: scale(1.05);
    }
    cursor: pointer;
`