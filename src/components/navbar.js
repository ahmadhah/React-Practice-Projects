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
    position:relative;
    margin-bottom: 50px;
`
const Logo = styled.div`
    margin:0 5px 0 5%;
    width: 20%;
    
`
const NavLinks = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
    // background-color: #EDEADE;
`
const Link = styled.a`
    text-decoration: none;
    color: black;
    padding: 10px 2%;
    cursor: pointer;
    font-size: 16px;
    text-transform:capitalize;
    &:hover {
        color: blue;

    }
`

const ButttonGroup = styled.div`
    display: flex;
    height: 50%;
    width: 22%;
`

const Button = styled.button`
    height: 100%;
    width:100%;
    background-color:${props => props.primary ? '#2289FF' : 'white'};
    font-size: 1rem;
    color: ${props => props.primary ? 'white' : '#2289FF'};
    border: 1px solid ${props => props.primary ? 'blue' : '#2289FF'};
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => props.primary ? 'white' : 'blue'};
        background-color:${props => props.primary ? '#7CB9E8' : '#F0F8FF'};
    }
`