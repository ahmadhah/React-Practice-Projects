import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Report from './pages/Report'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/report"component={Report}/>
          <Route path="/products"component={Products}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
