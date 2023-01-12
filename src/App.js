import React, {useState} from 'react';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import CreateToDo from './components/CreateToDo';
import LabeledInput from './components/LabeledInput';

const App = () => {
  const [todos, setTodos] = useState ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  });

const onChangeHandler = (e) => {
  setTodos(
    (prev) => {
      return prev = [...prev, {
        id: uuidv4(),
        name: e.target.value.toLowerCase,
        checked: false,
      }]
    }
  );
};

  return (
    <Form>
      <LabeledInput />
    </Form>
     
  );
}

export default App;
