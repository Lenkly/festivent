import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/Welcome';
import Genres from './pages/Genres';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
