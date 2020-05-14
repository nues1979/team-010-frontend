import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import containers from './containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={containers} />
    </Switch>
  </BrowserRouter>
);

export default App;
