//Input Blogs
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: ""
    };
  }

  handleInputChange(value) {
    this.setState({ blog: value });
  }

  handleClick(event) {
    this.props.handlePostChirp(this.state.blog);
    this.setState({ blog: "" });
  }

  render() {
    return (
      <form className="form col-md-6 my-2 mx-auto py-4 w-75">
        <input
          type="text"
          className="mt-1 col-12 border rounded p-3 mb-1 mt-6"
          id="input-field"
          value={this.state.blog}
          placeholder="Blog Content"
          onChange={event => this.handleInputChange(event.target.value)}
        />
        <button
          type="button"
          className="btn-lg btn-secondary mt-3 mb-2 w-25"
          onClick={event => this.handleClick(event)}
        >
          POST
        </button>
      </form>
    );
  }
}

export default Input;