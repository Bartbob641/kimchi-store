import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./Views/basket";
import Home from "./Views/Home";

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/varukorg">
            <Basket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
