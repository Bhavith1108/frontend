import React from 'react';

function TodoItem({ todo, id, deleteTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
