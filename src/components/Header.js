import { useEffect } from 'react';
import styled from 'styled-components'
import { selectUserName, selectUserPhoto, setUserLogin } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider, signInWithPopup } from '../firebase'
import { useHistory } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function Header() {
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(setUserLogin({ name: user.displayName, email: user.email, photo: user.photoURL }))
            }
        })
    }, []);

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                console.log(result.user.displayName)

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signOutf = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(setUserLogin({
                name: null,
                email: null,
                photo: null
            }))
            history.push('/login')
            alert('Signed Out')
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !userName ? (
                    <LoginContainer>
                        <Login onClick={signIn}>Login</Login>
                    </LoginContainer>
                ) :
                    <>
                        <NavMenu>
                            <a href="#foo">
                                <img src="/images/home-icon.svg" alt="home-icon" />
                                <span>Home</span>
                            </a>
                            <a href="#foo">
                                <img src="/images/search-icon.svg" alt="search-icon" />
                                <span>SEARCH</span>
                            </a>
                            <a href="#foo">
                                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href="#foo">
                                <img src="/images/original-icon.svg" alt="orignal-icon" />
                                <span>ORIGNAL</span>
                            </a>
                            <a href="#foo">
                                <img src="/images/movie-icon.svg" alt="movies" />
                                <span>MOVIES</span>
                            </a>
                            <a href="#foo">
                                <img src="/images/series-icon.svg" alt="series" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <UserImg onClick={signOutf} src={userPhoto} />
                    </>
            }

        </Nav>
    )
}

export default Header

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color:(0,0,0,0.6)
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color:black;
        border-color: transparent;
    }
`

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

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
        color: #fff;
        text-decoration: none;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

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

const LoginContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
`