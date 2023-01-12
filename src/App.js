import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });
  return (
    <>
    
    </>
  );
}

export default App;
