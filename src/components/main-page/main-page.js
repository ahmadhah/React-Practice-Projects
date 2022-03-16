import React from 'react'
import styled from 'styled-components'
import LeftSideBar from './components/left-sidebar/index'
import CenterContainer from './components/central-portion/index'
import RightSideBar from './components/right-sidebar/index'

function MainPage() {
    return (
        <Container>
            <LeftSideBar />
            <CenterContainer />
            <RightSideBar />
        </Container>
    )
}

export default MainPage

const Container = styled.div`
height: 93%;
width: 100%;
display: flex;
`