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
          <Route exact path="/genres">
            <Genres />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/matchlist">
            <Matchlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
