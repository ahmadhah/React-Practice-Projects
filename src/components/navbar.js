import React from 'react'
import styled from 'styled-components';

function Navbar() {
    return (
        <Container>
            <Logo><img src="/imgs/Logo.svg" alt="" /></Logo>
            <NavLinks>
                <Link href="/">Home</Link>
                <Link href="/about">About us</Link>
                <Link href="/features">features</Link>
                <Link href="/contact">Contact</Link>
            </NavLinks>
            <ButttonGroup>
                <Button>Sign IN</Button>
                <Button primary={true}>Sign Up</Button>
            </ButttonGroup>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 10vh;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    margin-left: 5%
`
const NavLinks = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    margin-left: 30%;
`
const Link = styled.a`
    text-decoration: none;
    color: black;
    font-size:20px;
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Roboto';
    text-transform:capitalize;
    &:hover {
        color: blue;
    }
`

const ButttonGroup = styled.div`
    display: flex;
    height: 50%;
    margin-left: 5%;
`

const Button = styled.button`
    height: 100%;
    width:100px;
    background-color:${props => props.primary ? '#2289FF' : 'white'};
    font-size: 1rem;
    color: ${props => props.primary ? 'white' : '#2289FF'};
    border: 2px solid ${props => props.primary ? 'white' : '#2289FF'};
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    &:hover {
        background-color: ${props => props.primary ? 'white' : '#2289FF'};
        color: ${props => props.primary ? '#2289FF' : 'white'};
        transition: all 0.2s ease-in-out;
        transform: translateY(-3px);
    }
`