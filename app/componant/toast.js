"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
export default function Toast({ open, massage, color }) {
  return (
    <div>
      <Snackbar open={open}>
        <Alert severity={color} variant="filled" sx={{ width: "100%" }}>
          {massage}
        </Alert>
      </Snackbar>
    </div>
  );
}
