import React, { Component } from "react";
import {Button, Input} from './styles.js';

class Add extends Component {

  render() {
    return (
      <div>
        <Input type="text" todo={this.props.todo} onChange={this.props.handleChange} value={this.props.todo}></Input> 
        <Button type="submit" value="Submit" onClick={this.props.handleSubmit}>Add</Button> 
      </div>
    );
  }
}

export default Add;
