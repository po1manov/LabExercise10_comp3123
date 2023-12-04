import React from 'react';
import logo from '../logo.svg';
import '../App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
