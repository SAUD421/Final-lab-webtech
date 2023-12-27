import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import missions from '../components/missions';
import dragons from '../components/dragons';  

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="./redux/missions" exact component={missions} />
        <Route path="./redux/dragons" exact component={dragons} /> 
      </Switch>
    </Router>
  );
};

export default AppRouter;
