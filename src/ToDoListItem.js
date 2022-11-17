import React from "react";
function TodoListItem({ id, item }) {
  return <li key={id}>{item.title}</li>;
}
export default TodoListItem;
