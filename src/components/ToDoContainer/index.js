import React, { Component } from "react";
import Add from "./Add";
import Search from "./Search";
import List from "./List";
import {Container} from "./styles.js";
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], todo: '', todosearch: '', id: 0};
  }
  handleChange=(event) =>{
    this.setState({todo: event.target.value});
  }
handleSubmit=(event) =>{
    event.preventDefault();
    let newArr = this.state.todos;
    newArr.push({todo: this.state.todo, id: this.state.id});
    this.setState({todos: newArr, id: (this.state.id)+1, todo:''})
  }

  handleDelate=(id) =>{
    let newArr = this.state.todos;
    const index = newArr.map(e => e.id).indexOf(id);
    newArr.splice( index, 1 );
    this.setState({todos: newArr})
  }

handleChangeSearch=(event) =>{
    this.setState({todosearch: event.target.value});
  }
  render() {
    return (
      <Container>
        <div>
        <Add handleChange={this.handleChange} handleSubmit={this.handleSubmit} todo={this.state.todo}/>
        <Search handleChangeSearch={this.handleChangeSearch} todosearch={this.state.todosearch}/>
        </div>
        <List todos={this.state.todos} todosearch={this.state.todosearch} handleDelate={this.handleDelate}/>
      </Container>
    );
  }
}

export default ToDoContainer;
