// {navbar-import}
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// {navbar-import}

// {icon-import}
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// {iconimport}

// {style import}
import "./stay.css";
// {style import}

// {hokes import}
import Text from "./emasagee";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { context } from "./dmassege";
// {hokes import}

export default function Area() {
  const { todos, setTodos } = useContext(context);
  const [input, setInput] = useState("");
  const[completedTodos,setCompletedTodos]=useState("all")
  function s(e){
setCompletedTodos(e.target.value)
  }
  const completedTodo=todos.filter((t)=>{
    return t.isCompleted;
  })
  const notcompletedTodo=todos.filter((t)=>{
    return !t.isCompleted;
  })
  let isCompletedd=todos;
  if(completedTodos=="completed"){
    isCompletedd=completedTodo;
  }else if (completedTodos=="not-completed") {
    isCompletedd=notcompletedTodo;
  }else{
    isCompletedd= todos;
  }
  
  const text = isCompletedd.map((t) => {
    return <Text key={t.id} todo={t} />;
  });
  // {get localstorage}
  useEffect(() => {
    const getUpdate =JSON.parse(localStorage.getItem("todos"))??isCompletedd;
    setTodos(getUpdate);
  }, []);
  // {get localstorage}

  // {add todo function}
  function add() {
    const newText = {
      id: uuidv4(),
      title: input,
      discription: "",
      isCompleted: false,
    };
    // {set localstorage}
    const updateTodo = [...todos, newText];
    console.log(updateTodo);
    setTodos(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
    // {set localstorage}

    setInput("");
  }
  // {add todo function}

  return (
    <>
      {/* {input} */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
        disabled={input.length==0}
          onClick={() => {
            add();
          }}
          style={{ margin: "10px", backgroundColor: "#0c2ec2" }}
          variant="contained"
        >
          Contained
        </Button>

        <TextField
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          style={{ margin: "10px", width: "100%" }}
          id="outlined-basic"
          label="add title"
          variant="outlined"
        />
      </div>
      {/* {input} */}

      {/* {text-area} */}

      {text}

      {/* {text-area} */}

      {/* {navbar} */}
      <ToggleButtonGroup
      style={{ display: "flex", justifyContent: "center", margin: "25px" }}
      value={completedTodos}
      exclusive
      onChange={s}
      aria-label="text alignment"
    >
      <ToggleButton value="all">
       all
      </ToggleButton>
      <ToggleButton value="completed" >
       completed
      </ToggleButton>
      <ToggleButton value="not-completed" >
      not completed
      </ToggleButton>
      
      
  </ToggleButtonGroup>
      {/* {navbar} */}
      {/* {title} */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <h1 style={{ color: "black", textAlign: "center" }}>my tasks</h1>
        <hr style={{ width: "80%" }} />
      </div>
      {/* {title} */}
    </>
  );
}
