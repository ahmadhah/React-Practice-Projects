import React from 'react'
import styled from 'styled-components';

function Services() {
    return (
        <Container>
            <h1>What Can We Help You Find?</h1>
        </Container>
    )
}

export default Services

const Container = styled.div`
    height: 70vh;
    background-color: pink;
    max-width: 100%;
    padding:5%;
    h1{
        text-align: center;
        font-size: 2.5rem;
    }
`