"use client";
import React, { useState,useReducer } from "react";
import Master from "./componant/master";
import "./componant/stay.css";
import { v4 as uuidv4 } from "uuid";
import Reducer from "./reducer/reducer-1";
import { TodosContext } from "./componant/reduceContext";
// import { TodosProvider } from "./componant/reduceContext";
import TodosProvider from "./componant/reduceContext";
const info = [
  {
    id: uuidv4(),
    title: "hi mego",
    discription: "how are you",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "hi mego",
    discription: "how are you",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "hi mego",
    discription: "how are you",
    isCompleted: false,
  },
];
export default function Home() {
  const [todos, setTodos] = useState(info);
  const [todo, setTodo] = useState({ todos });

  
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
      {/* <TodosProvider> */}
    {/* <TodosContext.Provider value={{todos:todos,setTodos:setTodos}}> */}
    
    <Master />

    {/* </TodosContext.Provider> */}
      {/* </TodosProvider> */}
    </div>
  );
}
