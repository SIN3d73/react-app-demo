import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Container from 'react-bootstrap/es/Container';
import Basics from './pages/Basics/Basics';
import Users from './pages/Users/Users';
import AppNavbar from './components/AppNavbar/AppNavbar';
import JsUtils from './pages/JsUtils/JsUtils';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Container>
        <Switch>
          <Route path="/basics" strict component={Basics}/>
          <Route path="/js-utils" strict component={JsUtils}/>
          <Route path="/users" strict component={Users}/>
          <Redirect from="*" to="/basics"/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
