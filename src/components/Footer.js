import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <LinksSection>
                <div>
                    <h3>Popular Searches</h3>

                    <a>Apartment for Rent</a>
                    <a>Apartment Low to hide</a>
                    <a> Offices for Buy</a>
                    <a> Offices for Rent</a>

                </div>
                <div>
                    <h3>About Us</h3>
                    <a >Our Story</a>
                    <a>Team Members</a>
                    <a>Careers</a>
                    <a>Contact Us</a>
                </div>
                <div>
                    <h3>Quick links</h3>
                    <a>Terms of Use</a>
                    <a>Privacy Policy</a>
                    <a>Contact Support</a>
                    <a>FAQs</a>
                </div>
                <div>
                    <h3>Support</h3>
                    <a>Help Center</a>
                    <a>Loan Support </a>
                    <a>Managment</a>
                    <a>Privacy Policy</a>
                </div>
            </LinksSection>
            <CopyrightsSection>
                <img src="/imgs/logo.png" alt="" />
                <p>© 2022 Besnik. All rights reserved.</p>
            </CopyrightsSection>
        </Container>
    )
}

export default Footer

const CopyrightsSection = styled.div`
    display:flex;
    margin-top:50px;
    align-items:center;
    justify-content:space-between;
    height:7%;
    width:80%;
    margin:0 auto;
    img{
        height:100%;
        object-fit:contain;
    }
    p{
        font-size:12px;
        color:#828282;
    }
`

const Container = styled.div`
    // background-color: skyblue;
    width:100%;
    height:40vh;
    `

const LinksSection = styled.div`
    
    height:80%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    div{
        // background-color:white;
        height:100%;
        width:17%;
        a{
            display:block;
            // padding:10px;
            line-height:25px;
            text-decoration:none;
            color:black !important;
            font-size:0.8rem;
            cursor:pointer;
            &:hover{
                color:black;
            }
        }
    }
`