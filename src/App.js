import styled from 'styled-components';
import Navbar from './components/navbar';
import Header from './components/hero-section/index';
import Services from './components/Services';
function App() {
  return (
    <Conainer>
      <Navbar />
      <Header />
      <Services />
    </Conainer>
  );
}

export default App;

const Conainer = styled.div`
  max-width:100vw;
  margin: 0;
`