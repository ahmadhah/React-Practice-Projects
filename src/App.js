import './App.css';
import Form from './components/form'
import React from 'react'

import TodoList from './components/TodoList';

function App() {



  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form/>
      <TodoList />
    </div>
  );
}

export default App;
