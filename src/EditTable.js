import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import FormTable from "./FormTable";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditTable({ index, open, setOpen }) {
  const [newValue, setNewValue] = useState([]);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    dispatch({ type: "SET_USER_DATA", payload: newValue });
    alert("Your changes are saved");
    setOpen(false);
  };

  return (
    <Dialog open={open} fullWidth maxWidth="lg">
      <DialogTitle>
        <Typography variant="h6" align="center">
          USER INFORMATION
        </Typography>
      </DialogTitle>
      <DialogContent>
        <FormTable index={index} setNewValue={setNewValue} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
