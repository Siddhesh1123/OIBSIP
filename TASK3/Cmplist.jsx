import React from 'react'

const Cmplist = ({ cmptodo }) => {
   


    return (
        
        <div>
            {
             console.log(cmptodo)
            }
            {   
                cmptodo === undefined ? <p>no task completed</p> : cmptodo.map((todo) => (
                <li className="list-item" key={todo.title}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                </li>
            ))
    }
        </div>
        );
}

export default Cmplist;