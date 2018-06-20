import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './Welcome';
import Brokers from './Brokers';
import Reviews from './Brokerages';
import Login from './Login';
import Signup from './Signup/SignUp';
import { Route, Switch } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App light-blue lighten-4">
        <nav className="light-blue darken-3">
          <div class="nav-wrapper">
            <a href="/" className="brand-logo right">
              HireFox
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="/brokers">Employee Profiles</a>
              </li>
              <li>
                <a href="/reviews">Employee Reviews</a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/brokers" component={Brokers} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
