import React, {useState} from 'react';
import './App.css';
import CreateToDo from './components/CreateToDo';

const App = () => {
  const [todos, setTodos] = useState ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });


  
  return (
    <>
      <CreateToDo onChange={onChangeHandler} />
    </>
  );
}

export default App;
