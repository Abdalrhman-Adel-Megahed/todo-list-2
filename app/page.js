"use client";
import { useState } from "react";
import Master from "./componant/master";
import "./componant/stay.css";
import { Toastcontext } from "./componant/toastcontext";

import Toast from "./componant/toast";

// const info = [
//   {
//     id: uuidv4(),
//     title: "hi mego",
//     discription: "how are you",
//     isCompleted: false,
//   },
//

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
  const [massage, setmassage] = useState("");
  const [color, setcolor] = useState("");
  const [open, setOpen] = useState(false);
  function showhidetoast(massage, color) {
    setOpen(true);
    setmassage(massage);
    setcolor(color);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
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
      <Toastcontext.Provider value={{ showhidetoast }}>
        <Toast open={open} massage={massage} color={color} />
        <Master />
      </Toastcontext.Provider>
      {/* </TodosContext.Provider> */}
    </div>
  );
}
