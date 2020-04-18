import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
