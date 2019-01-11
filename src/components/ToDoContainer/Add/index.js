import React, { Component } from "react";

class Add extends Component {

  render() {
    return (
      <div>
        <label>
            Add Todo:
            <input type="text" todo={this.props.todo} onChange={this.props.handleChange} />
        </label>
        <button type="submit" value="Submit" onClick={this.props.handleSubmit}/>
      </div>
    );
  }
}

export default Add;
