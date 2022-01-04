import { useEffect } from "react";
import "./styles.css";
import axios from "axios";
import APITable from "./APITable";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.userData);
  const getAPI = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({ type: "SET_USER_DATA", payload: data.data });
  };
  useEffect(
    () => {
      getAPI();
    },
    //eslint-disable-next-line
    []
  );
  console.log("result", result);
  return (
    <div className="App">
      <APITable result={result} />
    </div>
  );
}
