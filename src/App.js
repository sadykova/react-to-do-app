import React from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddToDoForm";

function App() {
  // const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>To-do list</h1>
      <AddToDoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      <hr />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
