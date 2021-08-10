import './App.css';
import Card from './components/cards/Card';
import reviews from './data'
import React, { useState } from 'react';

function App() {

  const Arr = reviews;
  const [index, setindex] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Card data={Arr[index]} setindex={setindex} index={index} length={Arr.length} />
      </div>
    </div>
  );
}

export default App;
