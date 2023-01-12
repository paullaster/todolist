import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import CreateToDo from './components/CreateToDo';

const App = () => {
  const [todos, setTodos] = useState ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });
//   const [task, setTasks] = useState ([]);

// const onChangeHandler = (e) => {
//   setTasks ( e.target.value);
// };

// const onClickHandler = (e) => {
//   e.preventDefault();
//   const newTask = {
//     id: uuidv4(),
//     labale: task,
//     completed: false,
//   };
  
//   setTodos (
//     newTask
//   );
//   localStorage.setItem('todos', JSON.stringify(todos));
//   console.log (todos)
  
// };
  console.log (todos)
  return (
    <CreateToDo 
    //onClickHandler={onClickHandler}
    //onChangeHandler={onChangeHandler}
    />
  );
}

export default App;
