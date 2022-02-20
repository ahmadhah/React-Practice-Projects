import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE.</SignUp>
                <Description>
                    Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition,
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: Top;
    justify-content: center;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-image:url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index:-1;
        opacity:0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width:90%;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    `
const CTALogoOne = styled.img`
    
    `

const SignUp = styled.a`
    padding:17px 0;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    color:#f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    
    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled(CTALogoOne)`
    width: 90%;

`