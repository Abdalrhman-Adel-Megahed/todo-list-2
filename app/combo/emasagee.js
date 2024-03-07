"use client";
// {icon-import}
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
// {iconimport}
// {dilog-import}
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
// {dilog-import}
import { useContext } from "react";
import { context } from "./dmassege";
import "./stay.css";
export default function Text({ todo }) {
const [open, setOpen] = useState({ d: false, e: false });
const { todos, setTodos } = useContext(context);
const [todoupdate, setTodoupdate] = useState({ title: "", discription: "" });
// {open delete dilog}
function delw() {
setOpen({ d: true });
}
// {open delete dilog}

// {open edit dilog}
function ediw() {
setOpen({ e: true });
}
// {open edit dilog}

// {delete function}
function deletee() {
const deleteee = todos.filter((t) => {
    return t.id != todo.id;
});
setTodos(deleteee);
localStorage.setItem("todos", JSON.stringify(deleteee));

}
// {delete function}

// {check function}
function c() {
const ch = todos.map((t) => {
    if (t.id == todo.id) {
    t.isCompleted = !t.isCompleted;
    }
    return t;
});
setTodos(ch);
localStorage.setItem("todos", JSON.stringify(ch));

}
// {check function}

// {edit function}
function U() {
const u = todos.map((t) => {
    if (t.id == todo.id) {
    return {
        ...t,
        title: todoupdate.title,
        discription: todoupdate.discription,
    };
    } else {
    return t;
    }
});
setTodos(u);
setOpen({ e: false });
localStorage.setItem("todos", JSON.stringify(u));
}
// {edit function}

return (
<>
    {/* {delete-masseeg} */}
    <div>
    <Dialog
        open={open.d}
        keepMounted
        onClose={() => {
        setOpen({ d: false });
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
            setOpen({ d: false });
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
        open={open.e}
        onClose={() => {
        setOpen({ e: false });
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
            setOpen({ e: false });
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
    {/* {text-area} */}
    <div
    className="text"
    style={{
        color: "white",
        backgroundColor: "#0c2ec2",
        display: "flex",
        justifyContent: "space-between",
        width: "96%",
        margin: "10px",
        borderRadius: "6px",
        alignItems: "center",
        padding: "10px",
    }}
    >
    {/* {text}   */}
    <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{todo.title}</h3>
        <h4>{todo.discription}</h4>
    </div>

    {/* {text}   */}

    {/* {icons} */}
    <div style={{ display: "flex", gap: "5px" }}>
        <IconButton
        onClick={() => {
            c();
        }}
        className={"check"}
        style={{
            color: todo.isCompleted ? "white" : "green",
            backgroundColor: todo.isCompleted ? "green" : "white",
            border: "solid",
        }}
        aria-label="delete"
        >
        <CheckIcon />
        </IconButton>

        <IconButton
        onClick={() => {
            ediw();
        }}
        className="edit"
        style={{
            color: "orange",
            backgroundColor: "white",
            border: "solid",
        }}
        aria-label="delete"
        >
        <EditIcon />
        </IconButton>
        <IconButton
        onClick={() => {
            delw();
        }}
        className="delete"
        style={{ color: "red", backgroundColor: "white", border: "solid" }}
        aria-label="delete"
        >
        <DeleteOutlineIcon />
        </IconButton>
    </div>
    {/* {icons} */}
    </div>
    {/* {text-area} */}
</>
);
    }