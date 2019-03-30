import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Basics from './pages/Basics/Basics';
import Users from './pages/Users/Users';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Container from 'react-bootstrap/es/Container';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Container>
        <Switch>
          <Route path="/basics" strict component={Basics}/>
          <Route path="/users" strict component={Users}/>
          <Redirect from="*" to="/basics"/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
