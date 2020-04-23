import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/Welcome';
import Genres from './pages/Genres';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/Genres">
            <Genres />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
