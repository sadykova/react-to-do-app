import React from "react";

function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="toDoTitle">{props.label}</label> <br />
      <input
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        type="text"
        id="toDoTitle"
        name="title"
      />
    </>
  );
}

export default InputWithLabel;
