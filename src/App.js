// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import missions from './components/missions';
import dragons from './components/dragons';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/missions" exact component={Missions} />
        <Route path="/dragon" exact component={Dragon} />
        <Route path="/profile" exact component={YourComponent} />
      </Switch>
    </Router>
  );
}

export default App;
