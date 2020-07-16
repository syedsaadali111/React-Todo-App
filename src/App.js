import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'First React App',
      newTodo: '',
      todos: [
        {
          title: 'Learn React',
          done: false
        },
        {
          title: 'Learn JSX',
          done: false
        }
      ]
    };
  }

  formSubmitted = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }],
      newTodo: ''
    });
  }

  newTodoChanged = event => {
    this.setState({ newTodo: event.target.value });
  }

  toggleTodoDone = (event, index) => {
    const todos = [...this.state.todos]; //makes a shallow copy of the array. (Values of object arrays are actually references to the objects, so copied values still points to the same object )
    todos[index] = {
      ...todos[index],                   // thats why we make a shallow copy of the object itself
      done: event.target.checked
    };
    
    this.setState({
      todos
    });
  }

  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone = (event) => {
    event.preventDefault();
    const todos = this.state.todos.map( todo => {  //map creates a new array and inside the map function, we are making shallow copies of the objects too, so all good!
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() { 
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
          formSubmitted={this.formSubmitted}
          newTodoChanged={this.newTodoChanged}
          newTodo={this.state.newTodo}
          allDone={this.allDone}
        />
        {/* <button onClick={this.allDone}>Mark all as done</button> */}
        <TodoList 
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}
 
export default App;

