import React, { useState } from "react";
import Completed from "./Completed";
import Component from "./Component";
import "./CSS/style.css";

const Home = () => {
  const [Item, setItem] = useState("");
  const [NewItem, setNewItem] = useState([]);
  const [AddItem, addNewItem] = useState([]);

  const setValue = (event) => {
    const value = event.target.value;
    setItem(value);
  };
  const showItem = () => {
    setNewItem((oldItems) => {
      return [...oldItems, Item];
    });
    setItem("");
  };
  const DeleteItem = (id) => {
    setNewItem((old) => {
      return old.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const Delete = (id) => {
    setNewItem((oldItems) => {
      addNewItem((ind) => {
        return [...ind, oldItems[id]];
      });
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const DeleteIt = (id) => {
    addNewItem((ind) => {
      return ind.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="row justify-content-around mx-auto wrapper">
        <div className="container p-3 ">
          
          <h4>To-Do List</h4>
          <br />
          <div className="main">
            <input
              type="text"
              placeholder="Add An Item"
              value={Item}
              className="input"
              onChange={setValue}
            />
            <button onClick={showItem} className="BT">
            ADD
            </button>
           
          </div>
          <div className="list">
            <ol>
              {NewItem.map((val, index) => {
                return (
                  <Component
                    key={index}
                    id={index}
                    text={val}
                    onSelect={DeleteItem}
                    onChange={Delete}
                  />
                );
              })}
            </ol>
          </div>
        </div>
        <div className="container p-3">
          <h4>Completed List</h4>
          <br />
          <div className="list">
            <ol>
              {AddItem.map((val, index) => {
                return (
                  <Completed
                    key={index}
                    id={index}
                    text={val}
                    onSelect={DeleteIt}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
