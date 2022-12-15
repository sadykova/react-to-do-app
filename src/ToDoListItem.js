import React from "react";
function TodoListItem({ id, item, onRemoveTodo }) {
  return (
    <li key={id}>
      {item.title} <button onClick={() => onRemoveTodo(item.id)}>Remove</button>
    </li>
  );
}
export default TodoListItem;
