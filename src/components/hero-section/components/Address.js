import React from 'react'
import styled from 'styled-components';

const Address = () => {
    return (
        <AddressContainer>
            <div>
                <h5>Address</h5>
                <p>587 Bridgeton Road</p>
            </div>
            <div>
                <h5>City</h5>
                <p>El Paso, Texas</p>
            </div>
            <div>
                <button>
                    Search
                </button>
            </div>
        </AddressContainer>
    )
}

export default Address

const AddressContainer = styled.div`
    width: 50%;
    height:10%;
    margin: 5% 0 0 24%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    
    div{
        height: 100%;
        width:33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding:5% 0% 5% 5%;
        h5{
            margin: 5px 0;
        }
        p{
            color:grey;
            font-size: 0.7rem;
            width: 100%;
            margin: 0;
        }
        button{
            height: 60%;
            width: 70%;
            padding: 5%;
            background-color: #2289FF;
            color: white;
            border: none;
            border-radius: 5px;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`