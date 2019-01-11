import React, { Component } from "react";
import {Input, Text} from './styles.js';

class Search extends Component {

  render() {
    return (
      <div>
        <Text>
            Search:
            <Input type="text" todosearch={this.props.todosearch} onChange={this.props.handleChangeSearch} ></Input> 
        </Text>
      </div>
    );
  }
}

export default Search;