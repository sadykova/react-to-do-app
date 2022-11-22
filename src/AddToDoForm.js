import React from "react";

function AddToDoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    console.log(todoTitle);
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="toDoTitle">Title</label> <br />
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        type="text"
        id="toDoTitle"
        name="title"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
