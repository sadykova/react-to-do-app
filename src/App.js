import React from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddToDoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div>
      <h1>To-do list</h1>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
