import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useReducer } from "react";
import AppState from "./AppState";
import reducer from "./store/reducer";
import initialState from "./store/initialState";
import Routes from "./routes";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppState.Provider value={{ state, dispatch }}>
      <Routes />
    </AppState.Provider>
  );
}

export default App;
