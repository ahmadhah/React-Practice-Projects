import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a >
                    <img src="/images/home-icon.svg" alt="home-icon" />
                    <span>Home</span>
                </a>
                <a >
                    <img src="/images/search-icon.svg" alt="search-icon" />
                    <span>SEARCH</span>
                </a>
                <a >
                    <img src="/images/watchlist-icon.svg" alt="watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a >
                    <img src="/images/original-icon.svg" alt="orignal-icon" />
                    <span>ORIGNAL</span>
                </a>
                <a >
                    <img src="/images/movie-icon.svg" alt="movies" />
                    <span>MOVIES</span>
                </a>
                <a >
                    <img src="/images/series-icon.svg" alt="series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I65TJ-BkNEV5D6Ad-4BkRrppNksT84y68m4z1T1gQ=s64-c-mo" />
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left:25px;
    algin-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor:pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            // this after behaves like a div

            &:after{
                content: '';
                height: 2px;
                background-color: white;
                position: absolute;
                bottom: -6px;
                left: 0;
                right: 0;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
                transition: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`