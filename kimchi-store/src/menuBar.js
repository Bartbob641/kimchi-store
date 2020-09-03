import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge, Typography, Toolbar, AppBar } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import AppState from "./AppState";

function MenuBar() {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useContext(AppState);
  return (
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
  );
}
export default MenuBar;
