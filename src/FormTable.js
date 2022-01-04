import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

export default function FormTable({ index, setNewValue }) {
  const userData = useSelector((state) => state.userData);

  console.log(userData[index], "userData");
  const heading = [
    {
      label: "Id",
      name: "id",
      type: "text",
      required: true,
      value: `${userData[index].id}`,
      disable: true
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,

      value: `${userData[index].email}`
    },
    {
      label: "FirstName",
      name: "first_name",
      type: "",
      required: true,
      disable: false,
      value: `${userData[index].first_name}`
    },
    {
      label: "LastName",
      name: "last_name",
      type: "",
      required: true,
      disable: false,
      value: `${userData[index].last_name}`
    },
    {
      label: "Avatar",
      name: "avatar",
      type: "",
      required: true,
      disable: false,
      value: `${userData[index].avatar}`
    }
  ];
  const handleChange = (name, e) => {
    let newValue = [...userData, (userData[index][name] = e.target.value)];
    console.log(newValue, "data");
    setNewValue(newValue);
  };
  return (
    <>
      <Grid container spacing={2}>
        {heading.map((el) => (
          <Grid item xs={6}>
            <TextField
              fullWidth
              margin="dense"
              label={el.label}
              name={el.name}
              type={el.type}
              value={el.value}
              required={el.required}
              variant="standard"
              onChange={(e) => handleChange(el.name, e)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
