import './App.css';
import Card from './components/card/Card';
import data from './data'
import Menuu from './components/menu/Menu';
import React, { useState } from 'react';

function App() {
  const category = data.map((item) => item.category)
  const AllMenu = new Set(category)
  const Menu = ['All', ...AllMenu]
  const [itemlist, setitemlist] = useState(data);

  function SetCategory(category) {
    if (category == 'All') {
      return setitemlist(data)
    }
    const newList = data.filter((item) => item.category == category)
    setitemlist(newList)
  }


  return (
    <div className="App">
      <h1 className="menu">Our Menu</h1>
      <hr />
      <Menuu MenuList={Menu} SetCategory={SetCategory} />
      <div className="list">
        {itemlist.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default App;
