import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./components/GlobalStyle";
import Home from "./components/Home"
import Cake from "./components/Cake"

class App extends Component {
  render() {
    const App = () => (
        <div>
            <GlobalStyle/>
            <Switch>
                <Route exact path='/' component={props => <Home {...props} />}/>
                <Route path='/cake/:id' component={props => <Cake {...props} />}/>
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
