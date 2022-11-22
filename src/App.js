import React from "react";
import TodoList from "./TodoList";
import AddToDoForm from "./AddToDoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList"))
  );

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>To-do list</h1>
      <AddToDoForm onAddTodo={addTodo} />
      <hr />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
