import React, { Component } from "react";
import {Text, Button, Text2} from './styles.js'

function NumberList(props) {
    let todos = props.todos;
    const len = props.todosearch.length
    len && (todos = todos.filter((todo)=> todo.todo.includes(props.todosearch)))
    const listItems = todos.map((todo) =>
      <li>{todo.todo}<Button onClick={() => props.handleDelate(todo.id)}>Delate</Button></li>
    );
    return (
        (len && (todos.length === 0))?(<Text>No item found</Text>):(<ul>{listItems}</ul>)
    );
  }

class List extends Component {
  render() {
    const showing = this.props.todos.length
    return (
      <div>
        <Text2>Current Todos:</Text2>
        {(showing === 0) && (<Text>No Todos to complete </Text>)}
        <NumberList todos={this.props.todos} handleDelate={this.props.handleDelate} todosearch={this.props.todosearch}/>
      </div>
    );
  }
}
export default List;