import React, { Component } from 'react';
import { Link, HashRouter, Switch, Route } from 'react-router-dom'

import RegistrationPage from "./pages/RegistrationPage";
import logo from './logo.svg';
import './App.css';


class App extends Component {


    componentDidMount() {
        console.log("component mounted...");
    }

  render() {
    return (
      <div className="App container-fluid">
          <HashRouter>
              <Switch>
                  <Route path="/" key="7" component={RegistrationPage}/>
              </Switch>
          </HashRouter>
      </div>

    );
  }

}
export default App;
