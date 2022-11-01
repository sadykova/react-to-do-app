import React from "react";
function ToDoListItem(props) {
  return <li key={props.key}>{props.item.title}</li>;
}
export default ToDoListItem;
