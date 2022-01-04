import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import EditTable from "./EditTable";
import { useDispatch } from "react-redux";

export default function APITable({ result }) {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleDelete = (index) => {
    const res = result.splice(index, 1);
    const newRes = result.filter((el) => el !== res);
    dispatch({ type: "SET_USER_DATA", payload: newRes });
  };
  const handleEdit = (index) => {
    setIndex(index);
    setOpen(true);
  };
  const deleteIcon = (index) => {
    return (
      <IconButton onClick={(e) => handleDelete(index)}>
        <DeleteIcon />
      </IconButton>
    );
  };
  const editIcon = (index) => {
    return (
      <IconButton onClick={(e) => handleEdit(index)}>
        <EditIcon />
      </IconButton>
    );
  };
  return (
    <>
      {!open ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell align="center">Avatar</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result &&
                result.length > 0 &&
                result.map((row, i) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="center">{row.first_name}</TableCell>
                    <TableCell align="center">{row.last_name}</TableCell>
                    <TableCell>
                      <img src={row.avatar} alt={row.first_name} />
                    </TableCell>

                    <TableCell>{deleteIcon(i)}</TableCell>
                    <TableCell>{editIcon(i)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <EditTable index={index} open={open} setOpen={setOpen} />
      )}
    </>
  );
}
