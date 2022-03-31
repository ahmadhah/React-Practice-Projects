import styled from 'styled-components';
import Navbarr from './components/navbar/navbar';
import Header from './components/hero-section/index';
import Services from './components/Services';
import Trending from './components/trending/index';
import Testimonial from './components/Testimonial'
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <Conainer>
      <Navbarr />
      {/* <Header />
      <Services />
      <Trending />
      <Testimonial />
      <Search />
      <Footer /> */}
    </Conainer>
  );
}

export default App;

const Conainer = styled.div`
  max-width:100vw;
  margin: 0;
`