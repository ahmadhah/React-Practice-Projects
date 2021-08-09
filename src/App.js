import './App.css';
import Data from './data.js';
import { useState } from 'react'
import List from './components/List.js';
function App() {

  const [persons, setPersons] = useState(Data)

  return (
    <div className="App">
      <br/><br/><hr/>
      <h1>01 - useState</h1>
        <hr/>
        <h3 style={{backgroundColor:""}}>Total Persons : <span className="badge badge-info">{persons.length}</span></h3>
        <List persons ={persons}/>
        <button type="button" class="btn btn-success" onClick={()=>setPersons(Data)}>Display</button>
        <button type="button" className="btn btn-danger" onClick={()=>setPersons([])}>Clear All</button>   
        <br/><br/>
    </div>
  );
}

export default App;
