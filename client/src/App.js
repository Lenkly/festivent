import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import Start from './pages/Start';
import Welcome from './pages/Welcome';
import Genres from './pages/Genres';
import Details from './pages/Details';
import Matchlist from './pages/Matchlist';
import Profile from './pages/Profile';
import brightmode from './themes/brightmode';

function App() {
  const [theme, setTheme] = React.useState(brightmode);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/welcome">
              <Welcome onThemeChange={setTheme} theme={theme} />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
