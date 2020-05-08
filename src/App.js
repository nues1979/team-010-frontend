import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Img202005081028339431588930175915Jpg from './containers/Img202005081028339431588930175915Jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rooting for Team-010!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Img202005081028339431588930175915Jpg} />
    </Switch>
  </BrowserRouter>
);

export default App;
