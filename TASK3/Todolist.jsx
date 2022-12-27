import React from "react";

const Todolist = ({ todos, settodos, setcmptodo, cmptodo }) => {
  const temp = [];
  const handleDelete = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id));
  }
  const handleCompelete = (todo) => {
    // settodos(
    //   todos.map((data) => {
    //     if (data.id === todo.id) {
    //       return { ...data, completed: !data.completed };
    //     }  
    //     return data;
    //   })
    // );
    temp.push(todo);
    console.log(temp)
  };




  return (
    <div>


      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="bt">
            <button
              className="button-compelte task-button"
              onClick={() => handleCompelete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
