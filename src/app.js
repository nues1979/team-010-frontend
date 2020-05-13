import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import './App.css';
import login from './pages/login';
// import Artboard20200510180323Jpg from './containers/Artboard20200510180323Jpg';
// import homepage from './pages/homepage';
import homepage from './pages/homepage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login} />
      {/* <Route path="/" exact component={Artboard20200510180323Jpg} /> */}
      <Route path="/home" component={homepage} />
    </Switch>
  </BrowserRouter>
);

export default App;
