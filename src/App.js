import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Basics from './pages/Basics/Basics';
import Users from './pages/Users/Users';
import AppNavbar from './components/AppNavbar/AppNavbar';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route path="/basics" strict component={Basics}/>
        <Route path="/users" strict component={Users}/>
        <Redirect from="*" to="/basics"/>
      </Switch>
    </Router>
  );
}

export default App;
