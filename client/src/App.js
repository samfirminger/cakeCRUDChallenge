import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./components/GlobalStyle";
import Home from "./components/Home"
import Cake from "./components/Cake"
import NewCake from "./components/NewCake";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {


    render() {
    const App = () => (
        <div>
            <GlobalStyle/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cake/:id' component={props => <Cake {...props} />}/>
                <Route path='/newCake' component={NewCake}/>
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
    )
    return (
        <Switch>
            <ScrollToTop>
                <App/>
            </ScrollToTop>
        </Switch>
    );
  }
}

export default App;
