import React from 'react';
import './NewTodoForm.css'

const NewTodoApp = (props) => {
    return ( 
      <form onSubmit={props.formSubmitted}>
        <input id="newTodo" name="newTodo" type="text" placeholder="Enter a new task" onChange={props.newTodoChanged} value={props.newTodo}/>
        <button type="submit">Add Todo</button>
        <button class="allDone" onClick={(event) => {props.allDone(event)} }>Mark all as done</button>
      </form>
    );
}
 
export default NewTodoApp;