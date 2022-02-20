import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import movies from '../data'

function Detail() {

    const { id } = useParams()
    const movie = movies.find(movie => movie.id === parseInt(id))

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.backgroundImg} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} alt="" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>)}
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 3.5vw;
    position: relative;
    
`

const Background = styled.div`
    
        position:fixed; 
        top:0;      
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
        opacity:0.8;
        
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    
`

const ImageTitle = styled.div`
    margin-top:60px;
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.button`
    display:flex;
    align-items: center;
    background-color:transparent;
    border:none;
`

const AddButton = styled.button`
width:44px;
height:44px;
display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:white 2px solid;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;

    span{
        font-size:30px;
        color:white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color:rgba(0,0,0);
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:56px;
    background-color: rgba(249,249,249);
    border:none;
    padding:0 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover {
        background:rgba(198,198,198)
    }
`

//inheriting props of prev. button
const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgba(249,249,249);
    color:white;
    text-transform:uppercase;
`

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`
const Description = styled.div`
    color: rgb(249,249,249);
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    max-width:760px;
`