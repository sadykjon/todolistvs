import React from "react";

const TodoList = (props) => {
    const {elem,btnDelete}=props
    return (
        <div className="todo-list">
            <span>{elem.text}</span>
            <i className="fa-solid fa-pen fa-1x"></i>
            <i onClick={()=>btnDelete(elem.id)} className="fa-solid fa-trash fa-1x"></i>
        </div>
    )
}

export default TodoList