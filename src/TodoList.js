import React from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { filteroption: "showAll", todos: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  /* Reverses the completion value of a single todo */
  handleChange(id) {
    this.setState(prevState => {
      const changedTodos = prevState.todos.map(item => {
        if (id === item.todoData.id) {
          item.todoData.completed = !item.todoData.completed;
        }
        return item;
      });
      return {
        todos: changedTodos
      };
    });
  }

  /* Adds a new todo with the input's value to todos list */
  handleInput(inputText) {
    const newTodo = {
      todoData: {
        id: this.state.todos.length,
        text: inputText,
        completed: false
      }
    };
    this.setState(prevState => {
      const newTodos = prevState.todos.concat(newTodo);
      return {
        todos: newTodos
      };
    });
  }

  /* Deletes an todo from list by id and sets new id values by index */
  handleDelete(id) {
    this.setState(prevState => {
      const changedTodos = prevState.todos;
      let index;
      for (let i = 0; i < changedTodos.length; i++) {
        if (id === changedTodos[i].todoData.id) {
          index = i;
          break;
        }
      }
      changedTodos.splice(index, 1);
      for (let i = 0; i < changedTodos.length; i++) {
        changedTodos[i].todoData.id = i;
      }
      return {
        todo: changedTodos
      };
    });
  }

  /* Changes state's filter option which defines what todos are shown */
  handleFilter(option) {
    this.setState(() => {
      return {
        filteroption: option
      };
    });
  }

  /* Renders the input field for adding new todos and under it every previously added todo */
  render() {
    let todos;

    if (this.state.filteroption === "showUndone") {
      todos = this.state.todos.map(td => {
        if (td.todoData.completed == false) {
          return (
            <Todo
              key={td.todoData.id}
              todoData={td.todoData}
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
            />
          );
        }
      });
    } else if (this.state.filteroption === "showDone") {
      todos = this.state.todos.map(td => {
        if (td.todoData.completed == true) {
          return (
            <Todo
              key={td.todoData.id}
              todoData={td.todoData}
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
            />
          );
        }
      });
    } else {
      todos = this.state.todos.map(td => (
        <Todo
          key={td.todoData.id}
          todoData={td.todoData}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      ));
    }

    return (
      <div
        className={
          this.state.todos.length > 0 ? "todo-list-withTodos" : "todo-list"
        }
      >
        <TodoInput
          handleInput={this.handleInput}
          handleFilter={this.handleFilter}
        />
        {todos}
      </div>
    );
  }
}

export default TodoList;
