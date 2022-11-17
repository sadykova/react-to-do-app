import React from "react";
import TodoListItem from "./TodoListItem";

// const todoList = [
//   { id: 0, title: "Read book chapters" },
//   { id: 1, title: "Watch class videos" },
//   { id: 2, title: "Complete assignment" },
//   { id: 3, title: "Submit assignment" },
// ];

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
