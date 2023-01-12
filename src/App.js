import React, {useState} from 'react';
import './App.css';
import CreateToDo from './components/CreateToDo';

const App = () => {
  const [todos, setTodos] = useState ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });

const onChangeHandler = (e) => {
  setTodos(
    (prev) => {
      return prev = [...prev, {
        name: e.target.value.toLowerCase
      }]
    }
  );
};

  return (
    <>
      <CreateToDo onChange={onChangeHandler} />
    </>
  );
}

export default App;
