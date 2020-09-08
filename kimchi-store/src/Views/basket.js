import React, { useReducer, useContext } from "react";
import AppState from "../AppState";
import MenuBar from "../components/menuBar";

function Basket() {
  const { state } = useContext(AppState);
  console.log(state);
  return (
    <div>
      <MenuBar />
      <p>hej</p>
    </div>
  );
}

export default Basket;
