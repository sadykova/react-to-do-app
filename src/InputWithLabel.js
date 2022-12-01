import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  return (
    <>
      <label htmlFor="toDoTitle">{children}</label> <br />
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        type="text"
        id="toDoTitle"
        name="title"
      />
    </>
  );
}

export default InputWithLabel;
