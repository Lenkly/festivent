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
import Settings from './pages/Settings';
import UserLogin from './pages/UserLogin';
import Register from './pages/Register';
import darkmode from './themes/darkmode';

function App() {
  const [theme, setTheme] = React.useState(darkmode);
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
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/signin">
              <UserLogin />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
