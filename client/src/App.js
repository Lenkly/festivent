import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/welcome';
import Genres from './pages/genres';
import Details from './pages/details';
import Matchlist from './pages/matchlist';

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
