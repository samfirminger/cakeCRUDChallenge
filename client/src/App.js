import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Cake from "./components/Cake"

class App extends Component {
  render() {
    const App = () => (
        <div>
          <Switch>
            <Route exact path='/' component={props => <Home {...props} />}/>
            <Route path='/user/:id' component={props => <Cake {...props} />}/>
          </Switch>
        </div>
    )
    return (
        <Switch>
          <App/>
        </Switch>
    );
  }
}

export default App;
