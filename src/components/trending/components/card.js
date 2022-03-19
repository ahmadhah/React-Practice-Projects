import React, { useState } from 'react';
import styled from 'styled-components';

function Card({ price, img, name, para }) {

    const [heart, setHeart] = useState(false);
    const onClickHeart = () => {
        setHeart(!heart);
    }
    return (
        <CardContainer>
            <CardImg src={img} alt="" />
            <TextSection>
                <PriceSection>
                    <h3>{price}</h3>
                    <div onClick={onClickHeart} >
                        {heart ? <img src={"/imgs/red-heart.png"} alt="" />
                            : <img src="/imgs/heart-thin.png" alt="" />}

                    </div>
                </PriceSection>
                <h4>{name}</h4>
                <p >{para}</p>
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
    // background-color: green;
    padding:10px;
    display:flex;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const CardImg = styled.img`
    height:100%;
    object-fit: contain;
    width:35%;
`
const TextSection = styled.div`
    width:60%;
    height:100%;
    // background-color: yellow;
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
        height:15px;
        padding:5px;
        width:15px;
        background-color:#FFF2F2;
        border: 2px solid #FFD9D9;
        cursor:pointer;
        &:hover {
            transform: scale(1.04);
        }
        border-radius:5%;
        img{
            height:100%;
            width:100%;
            
        }
    }

`