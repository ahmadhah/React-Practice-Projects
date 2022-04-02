import React from 'react'
import styled from 'styled-components';

const Companies = () => {
    return (
        <Container>
            <CompaniesContainer>
                <Company>
                    <img src="/imgs/image 1.png" alt="company1" />
                </Company>
                <Company>
                    <img src="/imgs/image 2.png" alt="company2" />
                </Company>
                <Company>
                    <img src="/imgs/image 3.png" alt="company3" />
                </Company>
                <Company>
                    <img src="/imgs/image 4.png" alt="company4" />
                </Company>
                <Company>
                    <img src="/imgs/image 5.png" alt="company5" />
                </Company>
            </CompaniesContainer>
        </Container>
    )
}

export default Companies

const CompaniesContainer = styled.div`
height:30%;
    width:100%;
    max-width:100vw;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:white;
    @media(max-width: 700px){
        height:70%;
    }
`
const Company = styled.div`
    height:100%;
    img{
        height:100%;
        object-fit:contain;
    }
    @media(max-width: 700px){
        height:50%;
    }
`
const Container = styled.div`
    height:20%;
    width:100%;
    max-width:100vw;
    justify-self:flex-end;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;

`