import React from "react";
const todoList = [
  { id: 0, title: "Read book chapters" },
  { id: 1, title: "Watch class videos" },
  { id: 2, title: "Complete assignment" },
  { id: 3, title: "Submit assignment" },
];
function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
