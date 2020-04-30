import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/Welcome';
import Genres from './pages/Genres';
import Details from './pages/Details';
import Matchlist from './pages/Matchlist';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/Genres">
            <Genres />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/Matchlist">
            <Matchlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
