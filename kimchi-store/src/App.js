import React, { useReducer } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#F8ABBA",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

const initialState = {
  newProduct: "",
  products: [],
  count: 0,
};

function App() {
  const classes = useStyles();
  function reducer(state, action) {
    switch (action.type) {
      case "newtext":
        return { ...state, newProduct: action.payload };
      case "increment":
        return { ...state, count: state.count + 1 };
      case "addproduct":
        return {
          ...state,
          products: [...state.products, state.newProduct],
          newProduct: "",
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleInputChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch({ type: "newtext", payload: event.target.value });
  };

  console.log(state);
  // const [data, setData] = React.useState(initialState);
  // value={data.newProduct}
  return (
    <div className={classes.main}>
      <TextField
        id="standard-basic"
        label="Standard"
        value={state.newProduct}
        onChange={(e) => handleChange(e)}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "addproduct" })}
      >
        Primary
      </Button>
    </div>
  );
}

export default App;
