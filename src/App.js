import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Home} />
      <Route exact path="/users/:userId" component={Home} />
    </Switch>
  );
}
