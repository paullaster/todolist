import React, {useState} from 'react';
import Form from './components/Form';
import LabeledInput from './components/LabeledInput';
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
