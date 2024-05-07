"use client";
import { createContext, useReducer } from "react";
import Reducer1 from "../reducer/reducer-1";
export const TodosContext = createContext([]);
export const DispatContext = createContext(null);
const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(Reducer1, []);
  return (
    <TodosContext.Provider value={{ todos: todos, dispatch: todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
export default TodosProvider;
