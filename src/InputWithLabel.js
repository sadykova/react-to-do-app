import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="toDoTitle">{children}</label> <br />
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        type="text"
        id="toDoTitle"
        name="title"
        ref={inputRef}
      />
    </>
  );
}

export default InputWithLabel;
