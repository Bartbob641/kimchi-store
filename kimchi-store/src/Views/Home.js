import React, { useContext } from "react";
import useStyles from "../styles";
import MenuBar from "../components/menuBar";
import AppState from "../AppState";
import { Typography, TextField } from "@material-ui/core";

const Home = () => {
  const handleChange = (event) => {
    console.log(event.target);
    dispatch({
      type: "addtocart",
      payload: { amount: event.target.value, name: event.target.id },
    });
  };

  const product = (i) => {
    const handleNew = (name) => {
      const elementIndex = state.shoppingCart.findIndex(
        (element) => element.name === name
      );
      if (elementIndex === -1) {
        return 0;
      } else {
        return state.shoppingCart[elementIndex].amount;
      }
    };
    return (
      <div className={classes.product}>
        <Typography variant="h6" className={classes.product_title}>
          {i.name}
        </Typography>
        <img className={classes.image} src={i.image} />
        <TextField
          className={classes.amount}
          id={i.name}
          placeholder="0"
          type="number"
          value={handleNew(i.name)}
          onChange={(e) => {
            handleChange(e);
          }}
          variant="outlined"
          inputProps={{ className: classes.amountprops }}
        />
      </div>
    );
  };

  const { state, dispatch } = useContext(AppState);
  const classes = useStyles();
  console.log(state);
  return (
    <div className={classes.main}>
      <MenuBar />
      <div className={classes.productlist}>
        {state.products.map((i) => {
          return product(i);
        })}
      </div>
    </div>
  );
};

export default Home;
