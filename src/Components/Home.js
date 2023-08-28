// import React, { useState,useEffect } from "react";
// import TodoForm from "./Todo-Form/Todo-form";
// import TodoList from "./Todo-list/Todo-list";


// const Home = () => {
//     const [todos, setTodos] = useState(
//     JSON.parse(localStorage.getItem("todos")) || []
//   );
//   const [val, setVal] = useState("");

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);
//     const btnAdd = (inpVal) => {
//         console.log("value>>>", inpVal);
//         if (inpVal) {
//             const newItem = {
//                 id: Math.random().toString(36).slice(3.9),
//                 text: inpVal,
//                 complete: false,
//                 change: false
//             }
//             setTodos([...todos, newItem])
//         }
//     }
//     console.log(todos);
//     const btnDelete = (id) => {
//         console.log(id);
//         setTodos([
//             ...todos.filter((item) => item.id !== id)
//         ])
//     }
    
//     return (
//         <div className="home">
//             <h1>Number of Todo 0</h1>
//             <TodoForm val={val} setVal={setVal} btnAdd={btnAdd} />
//             {
//                 todos.map((elem)=>{
//             return <TodoList key={elem.id} elem={elem} btnDelete={btnDelete}/>
//                 })
//             }        </div>
//     )
// }
// export default Home