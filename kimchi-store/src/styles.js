import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#F8ABBA",
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
  },
  cart: {
    color: "#F8ABBA",
    position: "absolute",
    marginRight: "24px",
    right: "0",
    cursor: "pointer",
    fontSize: "1.5rem",
  },
  image: {
    width: "100%",
  },
  amount: {
    width: "30%",
    marginTop: "5%",
    marginLeft: "auto%",
  },
  amountprops: {
    color: "white",
    textAlign: "center",
    borderColor: "white",
    fontFamily: "Montserrat",
  },
  product: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
    width: "30%",
    padding: "5px",
    cursor: "pointer",
  },
  product_title: {
    fontFamily: "Montserrat",
    color: "white",
    textAlign: "center",
    marginBottom: "2%",
  },
  menu: {
    color: "#F8ABBA",
    marginRight: "15px",
    cursor: "pointer",
    fontSize: "1.5rem",
  },
  bar: {
    background: "white",
  },
  title: {
    fontFamily: "Montserrat",
    color: "#F8ABBA",
  },
}));

export default useStyles;
