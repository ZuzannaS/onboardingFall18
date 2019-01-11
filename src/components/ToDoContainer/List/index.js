import React, { Component } from "react";

function NumberList(props) {
    let todos = props.todos;
    const len = props.todosearch.length
    len && (todos = todos.filter((todo)=> todo.todo.includes(props.todosearch)))
    const listItems = todos.map((todo) =>
      <li>{todo.todo}<button onClick={() => props.handleDelate(todo.id)}>Delate</button></li>
    );
    return (
        (len && (todos.length === 0))?(<h6>No item found</h6>):(<ul>{listItems}</ul>)
    );
  }

class List extends Component {
  render() {
      console.log(this.props)
    return (
        <NumberList todos={this.props.todos} handleDelate={this.props.handleDelate} todosearch={this.props.todosearch}/>
    );
  }
}
export default List;