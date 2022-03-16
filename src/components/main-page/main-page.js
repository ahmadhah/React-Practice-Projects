import React, { useState } from 'react';
import styled from 'styled-components'
import LeftSideBar from './components/left-sidebar/index'
import CenterContainer from './components/central-portion/index'
import RightSideBar from './components/right-sidebar/index'

function MainPage() {

    const [page, setPage] = useState('Myday');
    const [flag, setFlag] = useState(true);
    console.log(flag);
    return (
        <Container>
            <LeftSideBar setPage={setPage} flag={flag} setFlag={setFlag} />
            {
                page === 'Myday' ? <CenterContainer flag={flag} /> : <Container1 flag={flag} >
                    <h1>{page} Page</h1>
                </Container1>
            }
            <RightSideBar />
        </Container>
    )
}

export default MainPage

const Container = styled.div`
height: 93%;
width: 100%;
display: flex;
overflow: hidden;

`
const Container1 = styled.div`
height: 95%;
width: ${props => props.flag ? '52%' : '70%'};
padding:20px;
`