import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Start from './pages/Start';
import Welcome from './pages/Welcome';
import Genres from './pages/Genres';
import Details from './pages/Details';
import Matchlist from './pages/Matchlist';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/Welcome">
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
          <Route path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
