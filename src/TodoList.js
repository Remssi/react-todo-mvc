import React from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { filteroption: 1, todos: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  /* deletes an todo from list by id and sets new id values by index */
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

  /* Renders the input field for adding new todos and under it every previously added todo */
  render() {
    const todos = this.state.todos.map(td => (
      <Todo
        key={td.todoData.id}
        todoData={td.todoData}
        handleChange={this.handleChange}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div
        className={
          this.state.todos.length > 0 ? "todo-list-withTodos" : "todo-list"
        }
      >
        <TodoInput handleInput={this.handleInput} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
