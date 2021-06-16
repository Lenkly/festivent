import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './themes/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import SplashAnimation from './pages/splash';
import Welcome from './pages/Welcome';
import Genres from './pages/genres';
import Details from './pages/festival';
import Matchlist from './pages/matches';
import Profile from './pages/Profile';
import Settings from './pages/settings';
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

            <Route path="/festival/:festivalname" component={Details} />

            <Route path="/matches" component={Matchlist} />

            <Route path="/profile" component={Profile} />

            <Route path="/settings">
              <Settings onThemeChange={setTheme} theme={theme} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
