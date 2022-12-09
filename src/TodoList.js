import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem
            item={item}
            key={item.id}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
