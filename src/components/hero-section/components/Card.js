import React from 'react'
import styled from 'styled-components';

const Card = () => {
    return (
        <CardContainer>
            <img src="/imgs/home.png" alt="home" />
            <h4>$599,000</h4>
            <h5>Newport</h5>
            <p>15 Lee Ave, Newport, Rl 02564</p>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    position: absolute;
    right: 30%;
    top: 45%;
    height: auto;
    width: auto;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    img{
        width: 100%;
        object-fit: contain;
        border-radius: 5px;
    }
    h4{
        margin: 10px 0;
        color: #2289FF;
    }
    h5{
        margin: 10px 0;
    }
    p{
        font-size: 10px !important;
        margin: 10px 0 !important;
        width: 100% !important;
    }

`