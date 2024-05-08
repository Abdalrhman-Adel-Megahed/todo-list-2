"use client";
import React from "react";
import Master from "./componant/master";
import "./componant/stay.css";

// const info = [
//   {
//     id: uuidv4(),
//     title: "hi mego",
//     discription: "how are you",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: "hi mego",
//     discription: "how are you",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     title: "hi mego",
//     discription: "how are you",
//     isCompleted: false,
//   },
// ];
export default function Home() {
  // const [todos, setTodos] = useState(info);
  // const [todo, setTodo] = useState({ todos });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: "5%",
        height: "600px",
      }}
    >
      {/* <TodosContext.Provider value={{todos:todos,setTodos:setTodos}}> */}
      <Master />
      {/* </TodosContext.Provider> */}
    </div>
  );
}
