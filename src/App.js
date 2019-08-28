import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {Switch,Route} from "react-router-dom"

import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {history} from "./index"

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
