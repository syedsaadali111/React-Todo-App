import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

  const { todo, index } = props;

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={(event) => {props.toggleTodoDone(event, index)}}/>
      <span className={todo.done ? 'done' : '' }>{todo.title}</span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
  );
}
 
export default TodoItem;