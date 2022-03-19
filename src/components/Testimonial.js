import React from 'react'
import styled from 'styled-components';

function Testimonial() {
    return (
        <Container>
            <h1>TESTIMONIALS</h1>
            <p>Our Clients send us bunch of smilies with our services and we love them</p>
            <Img src="/imgs/users.png" alt="testimonial" />
            <Profile src="/imgs/profile.png" alt="testimonial" />
            < Rectangle src="/imgs/Rectangle 3981.png" alt="" />
            <p style={{ marginTop: '50px' }} >"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
            <h3>Becky Nelson</h3>
            <img style={{ zIndex: '2' }} src="/imgs/Group 101.png" alt="testimonial" />
        </Container>
    )
}

export default Testimonial

const Container = styled.div`
    height:90vh;
    width:100%;
    background-color: #F9FBFE;
    // background-color: green;
    text-align:center;
    padding-top:100px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1,h3{
        margin:10px;
        z-index:2;
    }
    p{
        width:35%;
        z-index:2;
    }
    margin-bottom:100px;
`
const Rectangle = styled.img`
    width:50%;
    height:auto;
    position:absolute;
    bottom:-80px;
    z-index:1;
`
const Profile = styled.img`
    height:250px;
    width:250px;
    margin:0;
    
`
const Img = styled.img`
    width:90%;
    position:absolute;
    
`