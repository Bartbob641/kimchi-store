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
    marginTop: "1%",
    width: "25%",
    padding: "5px",
    cursor: "pointer",
  },
  productlist: {
    justifyContent: "space-around",
    flexDirection: "row",
    display: "flex",
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
  shopping_basket: { width: "100%" },
  shopping_basket_child: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    marginBottom: "1%",
    color: "#F8ABBA",
    border: "solid",
    paddingRight: "3%",
    borderRadius: "5px",
    borderWidth: "2px",
  },
  shopping_basket_grandchild: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
  },
  shopping_basket_image: { width: "30%", marginRight: "3%" },
  drawer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "10%",
  },
  drawer_menu: {
    fontFamily: "Montserrat",
    color: "#F8ABBA",
    fontSize: "1rem",
  },
  basket: {
    margin: "2%",
    fontFamily: "Montserrat",
    color: "#F8ABBA",
  },
  basket_down: {
    fontFamily: "Montserrat",
    color: "#F8ABBA",
    fontSize: "1.2rem",
  },
  checkout: {
    background: "#F8ABBA",
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
