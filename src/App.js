import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import market from './pages/market';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/market" exact component={market} />
    </Switch>
  </BrowserRouter>
);

export default App;
