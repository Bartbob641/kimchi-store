import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Basket from "./basket";

const BasicExample = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/varukorg">
            <Basket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default BasicExample;
