import './App.css';
import ThemeContext from './Context/ThemeContext'
import React, { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/MainWithFunction'

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>

      <div>
        <Header />
        <Main />

      </div>
    </ThemeContext.Provider>
  );
}


export default App;
