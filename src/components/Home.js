import styled from 'styled-components'
import { useEffect } from 'react';
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
import { db } from "../firebase";
import {
    collection,
    getDocs,
} from "firebase/firestore";


function Home() {

    const usersCollectionRef = collection(db, "movies");
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(usersCollectionRef);
            let tempMovies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dispatch(setMovies(tempMovies));
        }
        getData();
    }, []);

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    
    &:before{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:-1;
    }
    
`