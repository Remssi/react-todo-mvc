import React from "react";

/* Todo: clear input fields text when value is submitted */
class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", currentFilterOption: "showAll" };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.props.handleInput(this.state.text);
  }

  filter(event) {
    this.props.handleFilter(event.target.value);
  }

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.submit}>
          <input
            className="input-panel"
            placeholder="What should I get done?"
            value={this.state.text}
            type="text"
            onChange={this.handleChange}
          ></input>
        </form>
        <form className="filters">
          <input
            type="radio"
            name="filter"
            onClick={this.filter}
            value="showAll"
          />{" "}
          Show all
          <input
            type="radio"
            name="filter"
            onClick={this.filter}
            value="showUndone"
          />{" "}
          Show undone
          <input
            type="radio"
            name="filter"
            onClick={this.filter}
            value="showDone"
          />{" "}
          Show done
        </form>
      </div>
    );
  }
}

export default TodoInput;
