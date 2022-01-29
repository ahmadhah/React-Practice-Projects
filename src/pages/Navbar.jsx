import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { Badge, MailIcon, ShoppingCartOutlinedIcon } from '@mui/material';
// import MailIcon from '@mui/icons-material/Mail';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center><Logo>AHMAD</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    height: 60px;
    `
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
    `
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    `
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 2;
`
const Right = styled.div`
    flex: 1;
`
