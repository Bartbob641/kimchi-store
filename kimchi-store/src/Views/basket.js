import React, { useContext } from "react";
import AppState from "../AppState";
import MenuBar from "../components/menuBar";
import useStyles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

function Basket() {
  const { state } = useContext(AppState);
  console.log(state);
  const classes = useStyles();
  const product = (i) => {
    const elementIndex = state.products.findIndex(
      (element) => element.name === i.name
    );
    return (
      <div className={classes.shopping_basket_child}>
        <div className={classes.shopping_basket_grandchild}>
          <img
            className={classes.shopping_basket_image}
            src={state.products[elementIndex].image}
          />
          <p>{i.name}</p>
        </div>

        <p>{i.amount} st</p>
        <p>
          {parseInt(i.amount) * parseInt(state.products[elementIndex].price)} kr
        </p>
      </div>
    );
  };
  return (
    <div className={classes.checkout}>
      <MenuBar />
      <div className={classes.basket}>
        <Accordion>
          <AccordionSummary
            className={classes.basket_down}
            expandIcon={
              <FontAwesomeIcon
                icon={faChevronDown}
                className={classes.basket_down}
              />
            }
          >
            Varukorg
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.shopping_basket}>
              {state.shoppingCart.map((i) => {
                return product(i);
              })}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            className={classes.basket_down}
            expandIcon={
              <FontAwesomeIcon
                icon={faChevronDown}
                className={classes.basket_down}
              />
            }
          >
            Betala
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Basket;
