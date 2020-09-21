import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import useStyles from "../styles";
import { useHistory } from "react-router-dom";
import AppState from "../AppState";

function MenuBar() {
  const { state, dispatch } = useContext(AppState);
  const classes = useStyles();
  const history = useHistory();

  const handleChange = () => {
    dispatch({ type: "drawer" });
  };

  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <Button>
          <FontAwesomeIcon
            className={classes.menu}
            icon={faBars}
            onClick={() => handleChange()}
          />
        </Button>
        <Drawer anchor="left" open={state.drawer}>
          <ClickAwayListener onClickAway={() => handleChange()}>
            <div className={classes.drawer}>
              <Button
                className={classes.drawer_menu}
                onClick={() => {
                  history.push("/");
                  handleChange();
                }}
              >
                Start
              </Button>
              <Button
                className={classes.drawer_menu}
                onClick={() => {
                  history.push("/varukorg");
                  handleChange();
                }}
              >
                Varukorg
              </Button>
              <Button
                className={classes.drawer_menu}
                onClick={() => {
                  handleChange();
                  history.push("/omoss");
                }}
              >
                Om oss
              </Button>
            </div>
          </ClickAwayListener>
        </Drawer>
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
