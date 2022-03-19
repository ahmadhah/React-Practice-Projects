import React from 'react'
import styled from 'styled-components';
import Address from './components/Address';
import Card from './components/Card';
import Companies from './components/Companies';

function HeroSection() {
    return (
        <Outer>
            <InnerContainer>
                <Container1>
                    <h1>Search for Homes in your Neighborhood</h1>
                    <p>Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.</p>
                    <Address />
                </Container1>
                <Container2>
                    <Card />
                </Container2>
            </InnerContainer>
            <Companies />
        </Outer>
    );
}

export default HeroSection;

const Outer = styled.div`
    height: 90vh;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const InnerContainer = styled.div`
    height: 80%;
    width: 100%;
    max-width: 100vw;
    display: flex;
    `
const Container1 = styled.div`
    height: 100%;
    width: 50%;

    h1{
        font-size: 3rem;
        width:52%;
        margin: 13% auto 10px auto; 
    }
    p{
        width: 52%;
        margin: 0 auto;
        font-size: 0.9rem;
    }
`
const Container2 = styled(Container1)`
    background-image: url("/imgs/Iamge.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
`

