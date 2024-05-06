"use client";
import { useState } from "react";
import Master from "./combo/master";
import "./combo/stay.css";
import { context } from "./combo/context";
import { v4 as uuidv4 } from "uuid";
import { context2 } from "./combo/context2";
import { context3 } from "./combo/context3";
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
  const[todo,setTodo]=useState({todos})

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
      <context3.Provider value={{todo, setTodo}}>
      <context.Provider value={{ todos, setTodos }}>
        <Master />
      </context.Provider>
      </context3.Provider>
    </div>
  );
}
