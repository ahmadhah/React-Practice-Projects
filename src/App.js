import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom"
import Home from "./components/pages"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Speakers from "./components/pages/Speakers"
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/speakers" component={Speakers} />
      </Switch>
    </>
  );
}

export default App;
