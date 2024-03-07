"use client"
import { useState } from "react";
import Master from "./combo/master";
import "./combo/stay.css";
import { createTheme ,ThemeProvider} from "@mui/material/styles";
import { context } from "./combo/dmassege";
import { v4 as uuidv4 } from 'uuid';

const info=[
  {
  id:uuidv4(),
title:"hi mego",
discription:"how are you",
isCompleted:false,
},
  {
  id:uuidv4(),
title:"hi mego",
discription:"how are you",
isCompleted:false,
},
  {
  id:uuidv4(),
title:"hi mego",
discription:"how are you",
isCompleted:false,
}
]
export default function Home() {
  const [todos,setTodos]=useState(info)  

  return(
   
    <div style={{display:"flex",justifyContent: "center",
  alignContent: "center",
  alignItems: "center", marginTop:"5%",height:"600px"}}>
  <context.Provider value={{todos,setTodos}}>
  <Master/>
  </context.Provider>
  </div>
  
)
}