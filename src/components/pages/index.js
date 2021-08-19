import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import Speakers from "./Speakers"

function Home() {
    return (
        <div className="home">
            <MainElement>
                <h1>Home Page</h1>
                <Link to="/speakers"><button>info.</button></Link>
            </MainElement>
        </div>
    )
}

export default Home


//! Styling our components


const MainElement = styled.div`

h1{
    color:white;
    font-size:70px;
}

`
