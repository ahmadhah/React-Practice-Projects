import styled from 'styled-components';
import Navbar from './components/navbar';
import Header from './components/header';
function App() {
  return (
    <Conainer>
      <Navbar />
      <Header />
    </Conainer>
  );
}

export default App;

const Conainer = styled.div`
  max-width:100vw;
  margin: 0;
`