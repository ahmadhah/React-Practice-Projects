import React from 'react'
import styled from 'styled-components';

function Search() {
    return (
        <Container>
            <TextSection>
                <h1>Talk to a Redfin Agent</h1>
                <p>Start your search with an expert local agent—there’s no pressure or obligation.</p>
            </TextSection>
            <ButtonSection>
                <p>Where are you searching for homes?</p>
                <div>
                    <input type="text" name="home" placeholder="Enter a city, address, or ZIP code" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>

            </ButtonSection>

        </Container>
    )
}

export default Search

const Container = styled.div`
    margin-bottom:100px;
    height:45vh;
    max-width:100%;
    background-color: #0F2A47;
    display:flex;
    align-items:center;
    justify-content:center;
`
const TextSection = styled.div`
    width:40%;
    height:50%;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    h1{
        color:white;

        margin:5% 0 0 5%;
        font-size:2.5rem;
    }
    p{
        width:63%;
        margin-left:5%;
        font-size:0.9rem;
    }
`
const ButtonSection = styled(TextSection)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        width:50%;
        margin-left:0 !important;
    }

    div{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        height:35px;
        width:50%;
        
        input{
            height:90%;
            width:85%;
            border:none;
            // border-radius:5px;
            background-color:white;
            padding:2px 15px;
        }
        button{
            height:100%;
            width:15%;
            border:none;
            
            background-color:#2289FF;
            color:white;
            &:hover {
                background-color:#87CEEB;
            }
        }
    }
`