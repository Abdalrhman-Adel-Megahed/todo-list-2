"use strict"
import { v4 as uuidv4 } from "uuid";

export default function Reducer(addtodo, action) {
  
  
  switch (action.type) {
    case "addtodo": {
      const newText = {
        id: uuidv4(),
        title: action.payload.title,
        discription: "",
        isCompleted: false,
      };
      // {set localstorage}
      const updateTodo = [...addtodo, newText];
      localStorage.setItem("todos", JSON.stringify(updateTodo));
      return updateTodo;
    }
    case "delete": {
      const deleteee = addtodo.filter((t) => {
        return t.id != action.payload.id;
      });
      localStorage.setItem("todos", JSON.stringify(deleteee));
      return deleteee;
    }
    case "update": {
      const u = addtodo.map((t) => {
        if (t.id == action.payload.id) {
          return {
            ...t,
            title: action.payload.title,
            discription: action.payload.discription,
          };
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(u));
      return u;
    }
    case "get": {
      const getUpdate =
        JSON.parse(localStorage.getItem("todos")) ?? action.payload.task;
      return getUpdate;
    }
    case "complete": {
      const ch = addtodo.map((t) => {
        if (t.id == action.payload.id) {
          const updateTodo = {
            ...t,
            isCompleted: !t.isCompleted,
          };
          return updateTodo;
        } 
          return t;
        
      });
      localStorage.setItem("todos", JSON.stringify(ch));
      return ch;
    }
  }
}
