import React from 'react'
import styled from 'styled-components';

function Testimonial() {
    return (
        <Container>
            <h1>TESTIMONIALS</h1>
            <p>Our Clients send us bunch of smilies with our services and we love them</p>
            <Img src="/imgs/users.png" alt="testimonial" />
            <Profile src="/imgs/profile.png" alt="testimonial" />
            <ReviewSection>
                <p >"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
                <h3>Becky Nelson</h3>
                <img style={{ zIndex: '2' }} src="/imgs/Group 101.png" alt="testimonial" />
            </ReviewSection>
        </Container>
    )
}

export default Testimonial

const ReviewSection = styled.div`
    height: 30%;
    width: 35%;
    border-radius: 10px;
    background-color: #EDEADE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        width: 90% !important;
        margin-bottom: 0 !important;
        line-height: 1.5rem;
    }

    img{
        height: 70px;
        width: 100px;
        margin:0 auto;
        object-fit: contain !important;
    }

`

const Container = styled.div`
    height:78vh;
    width:100%;
    background-color: #F9FBFE;
    // background-color: green;
    text-align:center;
    padding-top:50px;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h1,h3{
        margin:10px;
        z-index:2;
    }
    p{
        width:35%;
        z-index:2;
    }
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