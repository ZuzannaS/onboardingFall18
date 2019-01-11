import React, { Component } from "react";
import Add from "./Add";
import Search from "./Search";
import List from "./List";
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], todo: '', todosearch: '', id: 0, delate: 0};
  }
  handleChange=(event) =>{
    this.setState({todo: event.target.value});
  }
handleSubmit=(event) =>{
    event.preventDefault();
    let newArr = this.state.todos;
    newArr.push({todo: this.state.todo, id: this.state.id});
    this.setState({todos: newArr})
    this.setState({id: (this.state.id)+1});
  }

  handleDelate=(id) =>{
    let newArr = this.state.todos;
    const index = newArr.map(e => e.id).indexOf(id);
    console.log(id)
    newArr.splice( index, 1 );
    this.setState({todos: newArr})
  }

handleChangeSearch=(event) =>{
    this.setState({todosearch: event.target.value});
  }
  render() {
    const showing = this.state.todos.length
    return (
      <div>
      <Add handleChange={this.handleChange} handleSubmit={this.handleSubmit} todo={this.state.todo}/>
      <Search handleChangeSearch={this.handleChangeSearch} todosearch={this.state.todosearch}/>
      <h1>Current Todos:</h1>
      {(showing === 0) && (<h5>No Todos to complete </h5>)}
      <List todos={this.state.todos} todosearch={this.state.todosearch} delate={this.state.delate} handleDelate={this.handleDelate}/>
      </div>
    );
  }
}

export default ToDoContainer;
