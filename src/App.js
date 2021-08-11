import './App.css';
import data from './data.js'
import Form from './components/Form/Form'
import React, { useState } from 'react';
import Paragraph from './components/pargraph/Paragraph'
function App() {

  const [index, setindex] = useState(0);
  const [arr, setarr] = useState(data);
  const array = arr.slice(0,index)

  return (
    <div className="App">
      <h1 id="title">Simple Form Application</h1>
      <Form setindex={setindex} length={data.length} />
      <Paragraph data={array} />
    </div>
  );
}

export default App;
