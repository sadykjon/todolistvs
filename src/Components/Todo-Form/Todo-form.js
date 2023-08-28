import React from "react"

const TodoForm = ({val,setVal,btnAdd}) => {
    const btnForm=()=>{
        btnAdd(val)
        setVal('')
    }
    return (
        <div className="todo-form">
            <input value={val} onChange={(e)=>setVal(e.target.value)} placeholder="New todo ..." type="text" />
            <button onClick={btnForm}>Add</button>
        </div>
    )
}

export default TodoForm