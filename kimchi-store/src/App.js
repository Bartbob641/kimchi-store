import React from "react";
import { TextField, Button } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

export const AuthContext = React.createContext();
const initialState = {
  newProduct: "",
  products: [],
};

const handleInputChange = (event) => {
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
};

function App() {
  const [data, setData] = React.useState(initialState);
  return (
    <div>
      <TextField id="standard-basic" label="Standard" value={data.newProduct} />
      <Button variant="outlined" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
