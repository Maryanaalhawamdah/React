import React, { useState } from 'react';

const TodoList = () => {
  // Initialize state for the list of To-Do items
  const [todos, setTodos] = useState([]);
  // Initialize state for the current To-Do input
  const [inputTodo, setInputTodo] = useState('');

  // Function to add a new To-Do item
  const addTodo = () => {
    if (inputTodo.trim() !== '') {
      setTodos([...todos, inputTodo]);
      setInputTodo('');
    }
  };

  // Function to remove a To-Do item by index
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new To-Do"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
