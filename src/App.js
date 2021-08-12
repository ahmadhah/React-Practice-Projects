import './App.css';
import React, { useState, useEffect } from 'react'
import List from './List';

function App() {
  const [text, settext] = useState('');
  const [list, setList] = useState([]);
  const [editing, setediting] = useState(false);
  const [idd, setidd] = useState('');

  function handleSubmit(e) {
    {
      console.log('handle submit func');
      e.preventDefault();
      const newItem = { id: new Date().getTime().toString(), title: text };
      setList([...list, newItem]);
      settext('');
    }
  }
  function editi() {
    console.log('editi')
    setList(
      list.map((item) => {
        if (item.id === idd) {
          return { ...item, title: text };
        }
        return item;
      })
    );
    setediting(false);
  }
  function edit(id) {
    
    setediting(true)
    const spe = list.find((item) => item.id === id);
    settext(spe.title)
    setidd(spe.id)


  }
  function delet(id) {
    const newList = list.filter((item) => item.id != id);
    setList(newList)
  }

  return (
    <div className="App">
      <h1 className="title">ToDo App</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={(e) => settext(e.target.value)} type="text" className="input" />
          {editing ? <button onClick={editi} className="btn btn-secondary">Update</button> : <button className="btn btn-secondary">Add</button>}

        </form>
        <ul className="list-group">
        </ul>
        {
          list.map((item, i) => < div key={i}><li className="  list-group-item list-group-item-info">{item.title} <i className="inl medium material-icons" onClick={() => delet(item.id)}>close</i><i className="inl medium material-icons" onClick={() => edit(item.id)}> border_color</i>  </li></div>)
        }
        <List />
      </div>
    </div>
  );
}

export default App;
