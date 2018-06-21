import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './Welcome';
import Brokers from './Brokers';
import Reviews from './Brokerages';
import Login from './Login';
import Signup from './Signup/SignUp';
import { Route, Switch } from 'react-router';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App light-blue lighten-4">
        <nav className="light-blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo right">
              HireFox
            </a>
            {/* this will be authenticated with the user signing in, if the localstorage has the token, we can skip '/welcome' and go straight to ''/dashboard' */}
            {window.location.pathname === '/' ? null : (
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <a href="/brokers">Employee Profiles</a>
                </li>
                <li>
                  <a href="/reviews">Employee Reviews</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/brokers" component={Brokers} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <footer className="page-footer light-blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
