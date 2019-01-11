import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div>
        <label>
            Search:
            <input type="text" todosearch={this.props.todosearch} onChange={this.props.handleChangeSearch} />
        </label>
      </div>
    );
  }
}

export default Search;