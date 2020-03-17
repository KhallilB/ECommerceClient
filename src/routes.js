import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LogIn from './components/Auth/LogIn/LogIn';
import SignUp from './components/Auth/SignUp/SignUp';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route
          path='/auth/signup'
          exact
          component={SignUp}
        />
        <Route path='/auth/login' exact component={LogIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
