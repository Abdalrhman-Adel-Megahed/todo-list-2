"use client"
import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import Reducer from "../reducer/reducer-1";
export const TodosContext = createContext([]);
export const DispatContext = createContext(null);
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
const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(Reducer,info);
  
  return (
    <DispatContext.Provider value={{ todoss: todos, dispatch: todosDispatch }}>
      {children}
    </DispatContext.Provider>
  );
};
export default TodosProvider;
