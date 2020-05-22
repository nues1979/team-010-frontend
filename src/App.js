import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import login from './pages/login';
import homepage from './pages/homepage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/home" component={homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;
