import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [task, setTasks] = useState([]);

  const onChangeHandler = e => {
    setTasks(e.target.value);
  };
  const onClickHandler = e => {
    e.preventDefault();
    setTodos(prev => {
      return (prev = [
        ...prev,
        {
          id: uuidv4(),
          label: task,
          created_at: Date.now(),
          completed: false
        }
      ]);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  };
const onCheckboxChangeHandle = (id) => {
  setTodos (
    (prev) => {
      return prev.map (todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        }else{
          return todo;
        }
      })
    }
  )
  console.log(todos);
};

  return (
    <>
      <CreateToDo
        onClickHandler={onClickHandler}
        onChangeHandler={onChangeHandler}
      />
      <TodoList todos={todos} onCheckboxChange={onCheckboxChangeHandle}/>
    </>
  );
};

export default App;
