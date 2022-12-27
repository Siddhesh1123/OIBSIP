import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Todolist from "./components/Todolist";
import Headercom from "./components/Headercom";
import Cmplist from "./components/Cmplist";

const App = () => {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [cmptodo, setcmptodo] = useState([]);

  return (
    <>
      
      <div className="container">
        <div className="container left">
          <div className="app-wrapper">
            <div>
              <Header />
            </div>
            <div>
              <Form
                input={input}
                setinput={setinput}
                todos={todos}
                settodos={settodos}
              />
            </div>
            <div>
              <Todolist todos={todos} settodos={settodos} setcmptodo={setcmptodo} cmptodo={cmptodo} />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="app-wrapper">
            <div>
              <Headercom  />
            </div>
            <div>
              <Cmplist cmptodo={cmptodo}   />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
