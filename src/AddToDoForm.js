import React from "react";

function AddToDoForm() {
  return (
    <form action="">
      <label htmlFor="toDoTitle">Title</label> <br />
      <input type="text" id="toDoTitle" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
