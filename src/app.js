import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
   
  }
  componentWillUnmount(){
    
  }
  render(){
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} /> 
      </Switch>
    </div>
  );
  }
}

export default App;
