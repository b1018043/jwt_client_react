import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import {Switch,Route} from "react-router-dom";
import {useSelector} from "react-redux";

import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {history} from "./index";
import AppBar from "./components/AppBar";
import TodoLists from "./components/Todos";

function App() {
  const {token}=useSelector(state=>state.user);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/signup"/>
        <Route exact path="/login" />
        <Route exact path="/todo" component={AppBar}/>
      </Switch>
      <Switch>
        <Route exact path="/todo" component={TodoLists} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
