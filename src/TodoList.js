import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem item={item} key={item.id} id={item.id} />;
      })}
    </ul>
  );
}

export default TodoList;
