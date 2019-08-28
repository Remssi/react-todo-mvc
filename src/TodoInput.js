import React from "react";

/* Todo: clear input fields text when value is submitted */
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.props.handleInput(this.state.text);
  }

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.submit}>
          <input
            className="input-panel"
            placeholder="what should I get done?"
            value={this.state.text}
            type="text"
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default TodoInput;
