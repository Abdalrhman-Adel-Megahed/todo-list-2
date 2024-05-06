// {navbar-import}
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// {navbar-import}

// {icon-import}
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// {iconimport}
// {dilog-import}
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuidv4 } from "uuid";
// {dilog-import}
// {style import}
import "./stay.css";
// {style import}

// {hokes import}
import Text from "./componant";
import { useEffect, useState, useMemo, useContext ,useReducer} from "react";
import { context } from "./context";
import Reducer1 from "../reducers/reducer-1";
// {hokes import}
export default function Area() {
  const { todoss, setTodos } = useContext(context);
  const [input, setInput] = useState("");
  const [openn, setOpen] = useState(false);
  const [open, setOpenn] = useState(false);
  const [todo, setTodo] = useState(null);
  const [completedTodos, setCompletedTodos] = useState("all");
  const [todoupdate, setTodoupdate] = useState({ title: "", discription: "" });
  const[todos,dispatch]=useReducer(Reducer1,[])
  function s(e) {
    setCompletedTodos(e.target.value);
  }
  const completedTodo = useMemo(() => {
    return todos.filter((t) => {
      return t.isCompleted;
    });
  }, [todos]);
  const notcompletedTodo = useMemo(() => {
    return todos.filter((t) => {
      return !t.isCompleted;
    });
  }, [todos]);
  let isCompletedd = todos;
  if (completedTodos == "completed") {
    isCompletedd = completedTodo;
  } else if (completedTodos == "not-completed") {
    isCompletedd = notcompletedTodo;
  } else {
    isCompletedd = todos;
  }
  const text = isCompletedd.map((t) => {
    return <Text key={t.id} todo={t} delw={delw} ediw={ediw} />;
  });
  // {get localstorage}
  useEffect(() => {
    dispatch({type:"get",payload:isCompletedd})
  }, []);
  // {get localstorage}

  // {add todo function}
  let todooo = todo;
  function delw(todo) {
    setTodo(todo);
    setOpenn(true);
  }
  // {open edit dilog}
  function ediw(todo) {
    setTodo(todo);
    setOpen(true);
  }
  // {open edit dilog}
  function deletee() {
   dispatch({type: "delete",payload:{id:todooo.id}})
    setOpenn(false);

   
    
  }
  // {edit function}
  function U() {
    dispatch({type:"update",payload:{id:todooo.id,title:todoupdate.title,discription:todoupdate.discription}})
    setOpen(false);
    
  }
  // {edit function}
  function add() {
    dispatch({type: "addtodo", payload:{title: input}})
    // {set localstorage}
    setInput("");
  }

  // {add todo function}
  return (
    <>
      {/* {input} */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          disabled={input.length == 0}
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
      <div>
        <Dialog
          open={open}
          keepMounted
          onClose={() => {
            setOpenn(false);
          }}
        >
          <DialogTitle>delete item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              do you want to delete this item
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenn(false);
              }}
            >
              close
            </Button>
            <Button
              onClick={() => {
                deletee();
              }}
            >
              yes,delete it
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* {delete-masseeg} */}
      {/* {edit-masseeg} */}
      <div>
        <Dialog
          open={openn}
          onClose={() => {
            setOpen(false);
          }}
        >
          <DialogTitle>edit title and discription</DialogTitle>
          <DialogContent>
            <DialogContentText>
              type the title and discription
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="title"
              label="title"
              type="text"
              fullWidth
              variant="outlined"
              value={todoupdate.title}
              onChange={(e) => {
                setTodoupdate({ ...todoupdate, title: e.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="detiles"
              label="detiles"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(e) => {
                setTodoupdate({ ...todoupdate, discription: e.target.value });
              }}
              value={todoupdate.discription}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                U();
              }}
              type="submit"
            >
              comfirm
            </Button>
          </DialogActions>
        </Dialog>{" "}
      </div>
      {/* {edit-masseeg} */}
      {/* {navbar} */}
      <ToggleButtonGroup
        style={{ display: "flex", justifyContent: "center", margin: "25px" }}
        value={completedTodos}
        exclusive
        onChange={s}
        aria-label="text alignment"
      >
        <ToggleButton value="all">all</ToggleButton>
        <ToggleButton value="completed">completed</ToggleButton>
        <ToggleButton value="not-completed">not completed</ToggleButton>
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
      {/* <Snackbaradd/> */}
    </>
  );
}
