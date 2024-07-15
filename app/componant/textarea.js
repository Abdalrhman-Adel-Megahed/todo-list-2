"use client";
// {navbar-import}
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// {navbar-import}

// {icon-import}
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// {iconimport}
// {dilog-import}
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Toastcontext } from "./toastcontext";
// {dilog-import}
// {style import}
import "./stay.css";
// {style import}
import React from "react";
// {hokes import}
import Text from "./componant";
import { useEffect, useState, useMemo, useContext } from "react";
import { DispatContext } from "./reduceContext";
import Toast from "./toast";
// {hokes import}
export default function Area() {
  const { todoss, dispatch } = useContext(DispatContext);
  // const { todos, setTodos} = useContext(TodosContext);
  const [input, setInput] = useState("");
  const [oopen, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [todo, setTodo] = useState(null);
  const [completedTodos, setCompletedTodos] = useState("all");
  const [todoupdate, setTodoupdate] = useState({ title: "", discription: "" });
  const { showhidetoast } = useContext(Toastcontext);

  function s(e) {
    setCompletedTodos(e.target.value);
  }

  let isCompletedd = todoss;
  const completedTodo = useMemo(
    () => todoss.filter((t) => t.isCompleted),
    [todoss]
  );

  const notcompletedTodo = useMemo(
    () => todoss.filter((t) => !t.isCompleted),
    [todoss]
  );

  if (completedTodos === "completed") {
    isCompletedd = completedTodo;
  } else if (completedTodos === "not-completed") {
    isCompletedd = notcompletedTodo;
  } else {
    isCompletedd = todoss;
  }

  useEffect(() => {
    dispatch({ type: "get" });

    //   const getUpdate =
    //   JSON.parse(localStorage.getItem("todos")) ?? isCompletedd;
    // setTodos(getUpdate);
  }, []);

  const text = isCompletedd.map((t) => (
    <Text key={t.id} todo={t} delw={delw} ediw={ediw} closse={Snackbar} />
  ));

  function delw(todo) {
    setTodo(todo);
    setOpenn(true);
  }

  function ediw(todo) {
    setTodo(todo);
    setOpen(true);
  }

  function deletee() {
    dispatch({ type: "delete", payload: { id: todo.id } });

    // const deleteee = todos.filter((t) => {
    //   return t.id != todo.id;
    // });
    // setTodos(deleteee);
    // localStorage.setItem("todos", JSON.stringify(deleteee));
    setOpenn(false);
    showhidetoast("Deleted Successfully", "error");
  }

  function U() {
    dispatch({
      type: "update",
      payload: {
        id: todo.id,
        title: todoupdate.title,
        discription: todoupdate.discription,
      },
    });

    // const u = todos.map((t) => {
    //   if (t.id == todo.id) {
    //     return {
    //       ...t,
    //       title:todoupdate.title,
    //       discription: todoupdate.discription,
    //     };
    //   } else {
    //     return t;
    //   }
    // });
    // setTodos(u);
    // localStorage.setItem("todos", JSON.stringify(u));
    setOpen(false);
    showhidetoast("Updated Successfully", "info");
  }

  function add() {
    dispatch({ type: "addtodo", payload: { title: input } });

    // const newText = {
    //   id: uuidv4(),
    //   title: input,
    //   discription: "",
    //   isCompleted: false,
    // };
    // // {set localstorage}
    // const updateTodo = [...todos, newText];
    // localStorage.setItem("todos", JSON.stringify(updateTodo));
    // setTodos(updateTodo); // updateTodo;
    setInput("");
    showhidetoast("todo added", "success");
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
          open={openn}
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
          open={oopen}
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
