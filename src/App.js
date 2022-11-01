import React from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddToDoForm";

function App() {
  return (
    <div>
      <h1>To-do list</h1>
      <AddToDoForm />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
