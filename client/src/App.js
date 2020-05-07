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
          <Route exact path="/welcome">
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
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
