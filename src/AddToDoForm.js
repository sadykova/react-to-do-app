import React from "react";

function AddToDoForm() {
  function handleAddTo(event) {
    event.preventDefault();
    let todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
  }
  return (
    <form onSubmit={handleAddTo}>
      <label htmlFor="toDoTitle">Title</label> <br />
      <input type="text" id="toDoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
