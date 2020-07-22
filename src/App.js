import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
      return (
          <div>
            <Router>
              <Navigation/>
                <Switch>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/register">
                    <Register/>
                  </Route>
                  <Route path="/">
                    <Profile/>  
                  </Route>                  
                </Switch>              
            </Router>              
          </div>
      )
  }
}

export default App
