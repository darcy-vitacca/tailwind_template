import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact } from './components/pages/Contact';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound';
import { Pricing } from './components/pages/Pricing';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
