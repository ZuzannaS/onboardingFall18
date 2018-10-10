import React, {
  Component
} from "react";

import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class ToDoContainer extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    }
  }
  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    })

  }
  formSubmitted(event) {
    event.preventDefault();
    // Add new todo to array
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    })
  }

  searchTodos(event) {
    let todos = [...this.state.todos];
    todos = todos.filter(todo => todo.title.includes(event.target.value) === true)
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <NewTodoForm
          newTodo={this.state.newTodo} formSubmitted={this.formSubmitted.bind(this)} newTodoChanged={this.newTodoChanged.bind(this)} />
        {/* Render todos */}
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} />

        <input placeholder="search" onChange={(event) => this.searchTodos(event)} />
      </div>

    );
  }
}

export default ToDoContainer;