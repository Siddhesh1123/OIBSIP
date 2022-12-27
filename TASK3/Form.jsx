import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setinput, todos, settodos }) => {
  const oninputChange = (event) => {
    setinput(event.target.value);
  };
  const onformsubmit = (event) => {
    event.preventDefault();
    settodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setinput("");
  };

  return (
    <form onSubmit={onformsubmit}>
      <input
        type="text"
        placeholder="Enter Work ToDo ..."
        className="task-input"
        value={input}
        onChange={oninputChange}
        required
      />
      <button type="submit" className="button-add">
        ADD
      </button>
    </form>
  );
};

export default Form;
