import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import './home.css';

function Home() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <TodoList todos={filteredTodos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;
