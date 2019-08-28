import React from "react";

function Todo(props) {
  return (
    <div
      className={
        props.todoData.completed ? "todo-completed" : "todo-uncompleted"
      }
    >
      <input
        type="checkbox"
        checked={props.todoData.completed}
        onChange={() => props.handleChange(props.todoData.id)}
      />
      <p>{props.todoData.text}</p>
      <div>
        <button
          onClick={() => props.handleDelete(props.todoData.id)}
          className="deleteButton"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
