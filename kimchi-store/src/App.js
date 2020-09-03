import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Typography,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import MenuBar from "./menuBar";

const initialState = {
  amount: 0,
  products: [{ name: "Hemmagjord kimchi", price: 89, image: "./kimchi.jpg" }],
  count: 0,
};

function App() {
  const classes = useStyles();
  const history = useHistory();
  function reducer(state, action) {
    switch (action.type) {
      case "newtext":
        return { ...state, amount: action.payload };
      case "addcount":
        return { ...state, amount: state.amount + 1 };
      case "reducecount":
        return { ...state, amount: state.amount - 1 };
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

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch({ type: "newtext", payload: event.target.value });
  };

  console.log(state);
  console.log(history);
  return (
    <div className={classes.main}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <FontAwesomeIcon className={classes.menu} icon={faBars} />
          <Typography variant="h5" className={classes.title}>
            Kimchi-store
          </Typography>
          <Badge
            className={classes.cart}
            badgeContent={state.amount}
            color="secondary"
          >
            <FontAwesomeIcon
              onClick={() => {
                history.push("/varukorg");
              }}
              icon={faShoppingCart}
            />
          </Badge>
        </Toolbar>
      </AppBar>
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
}

export default App;
