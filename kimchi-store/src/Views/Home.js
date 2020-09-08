import React, { useContext } from "react";
import useStyles from "../styles";
import MenuBar from "../components/menuBar";
import AppState from "../AppState";
import { Typography, TextField } from "@material-ui/core";

const Home = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch({ type: "newtext", payload: event.target.value });
  };

  const { state, dispatch } = useContext(AppState);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <MenuBar />
      <div className={classes.product}>
        <Typography variant="h6" className={classes.product_title}>
          {state.products[0].name}
        </Typography>
        <img className={classes.image} src={state.products[0].image} />
        <TextField
          className={classes.amount}
          id="standard-basic"
          placeholder="0"
          type="number"
          value={state.amount}
          onChange={(e) => handleChange(e)}
          variant="outlined"
          inputProps={{ className: classes.amountprops }}
        />
      </div>

      {/* <Button
      variant="outlined"
      color="primary"
      onClick={() => dispatch({ type: "addproduct" })}
    >
      Primary
    </Button> */}
    </div>
  );
};

export default Home;
