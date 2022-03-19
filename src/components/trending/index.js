import styled from 'styled-components';
import CardsSection from './components/cards-section';

function Trending() {
    return (
        <Container>
            <TopSection>
                <TextSection>
                    <h1>Our trending latest proparty</h1>
                    <p>Our unique process gives you peace of mind from home rent to services</p>
                </TextSection>
                <ButtonGroup>
                    <select name="cars" id="cars">
                        <option value="volvo">Property type</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <Button>See All Property</Button>
                </ButtonGroup>
            </TopSection>
            <CardsSection />
        </Container>
    )
}

export default Trending

const Container = styled.div`
    height: 90vh;
    margin-bottom: 10px;
    // background-color: pink;
    padding:1% 10%;
    max-width: 100vw;
`
const TopSection = styled.div`
    height: 35%;
    // background-color: blue;
    display: flex;

`
const TextSection = styled.div`
    height: 100%;
    width: 50%;
    // background-color: green;
    h1{
        font-size: 2.5rem;
        width: 80%;
    }
    p{
        width: 80%;
    }
`
const ButtonGroup = styled.div`
    height: 60%;
    width: 50%;
    // background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    select{
        padding:8px 15px;
        margin: 0 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
    }
`
const Button = styled.button`
    padding: 10px 17px;
    margin: 0 10px;
    border:none;
    border-radius: 4px;
    background-color: #2289FF;
    color: #fff;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`