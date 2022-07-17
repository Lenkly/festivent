import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './themes/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import SplashAnimation from './pages/splash';
import Welcome from './pages/Welcome';
import Genres from './pages/genres';
import Details from './pages/festival';
import Matchlist from './pages/matches';
import Profile from './pages/Profile';
import Settings from './pages/settings';
import ErrorState from './pages/errorstate';
import { darkmode } from './themes/theme';

function App() {
  const [theme, setTheme] = useState(darkmode);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={SplashAnimation} />

            <Route exact path="/welcome">
              <Welcome onThemeChange={setTheme} theme={theme} />
            </Route>

            <Route exact path="/genres" component={Genres} />

            <Route exact path="/festivals/:festivalId" component={Details} />

            <Route exact path="/festivals" component={Matchlist} />

            <Route path="/profile" component={Profile} />

            <Route path="/settings">
              <Settings onThemeChange={setTheme} theme={theme} />
            </Route>

            <Route component={ErrorState} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
