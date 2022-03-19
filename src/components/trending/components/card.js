import React, { useState } from 'react';
import styled from 'styled-components';

function Card() {
    const [heart, setHeart] = useState(false);
    const onClickHeart = () => {
        setHeart(!heart);
    }
    return (
        <CardContainer>
            <CardImg src="/imgs/image1.png" alt="" />
            <TextSection>
                <PriceSection>
                    <h3>$229,000</h3>
                    <div heart={heart.toString()}>
                        {heart ? <img src="/imgs/red-heart.png" alt="" onClick={onClickHeart} />
                            : <img src="/imgs/heart-thin.png" alt="" onClick={onClickHeart} />}

                    </div>
                </PriceSection>
                <h4>Langes Beach House</h4>
                <p >Co Rd Tribune Tribune</p>
                <div ><img src="/imgs/icon.png" alt="" ></img></div>
                <button >View Details</button>
            </TextSection>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    height:40%;
    width:42%;
    background-color: green;
    padding:10px;
    display:flex;

`
const CardImg = styled.img`
    height:100%;
    object-fit: contain;
    width:35%;
`
const TextSection = styled.div`
    width:60%;
    height:100%;
    background-color: yellow;
    padding-left:10px;
    h4{
        margin:0;
    }
    p{
        font-size:0.8rem;
    }
    button{
        background-color: white;
        border-radius: 5px;
        padding:6px 12px;
        display:block;
        margin-top:4px;
        &:hover {
            transform: scale(1.05);
            background-color: #2289FF;
            color: #fff;
        }
`
const PriceSection = styled.div`
    display:flex;
    height:30%;
    justify-content:space-between;
    align-items:center;
    h3{
        color:#2289FF;
        font-size:1.3rem;
    }
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        height:20px;
        padding:5px;
        width:20px;
        background-color:#FFD9D9;
        // background-color:${props => props.heart === 'true' ? '#FFD9D9' : 'white'};
        border-radius:5%;
        &:hover {
            transform: scale(1.05);
            transition: all 0.5s ease-in-out;
        }
        img{
            height:100%;
            width:100%;
            
        }
    }

`