import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [text, settext] = useState('');
  const [tasks, settasks] = useState(['ahmad', 'hannan', 'masood']);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text);
    

  }

  return (
    <div className="App">
      <h1 className="title">ToDo App</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={(e) => settext(e.target.value)} type="text" className="input" />
          <button type="submit" className="btn btn-secondary">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
