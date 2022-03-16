import styled from 'styled-components'
import Header from './components/header'
import MainPage from './components/main-page/main-page'
function App() {
  return (
    <Container>
      <Header />
      <MainPage />
    </Container>
  );
}

export default App;

const Container = styled.div`
height: 100vh;
width: 100vw;
`