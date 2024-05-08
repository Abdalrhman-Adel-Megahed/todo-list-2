import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Input() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          style={{ margin: "10px", backgroundColor: "#0c2ec2" }}
          variant="contained"
        >
          Contained
        </Button>
        <TextField
          style={{ margin: "10px", width: "100%" }}
          id="outlined-basic"
          label="add title"
          variant="outlined"
        />
      </div>
    </>
  );
}
