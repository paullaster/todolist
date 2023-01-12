import React, {useState} from 'react';
import uuid  from 'uuidv4';
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
        id: uuid(),
        name: e.target.value.toLowerCase,
        checked: false,
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
