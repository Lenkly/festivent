import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SplashAnimation from './pages/splash';
import Welcome from './pages/Welcome';
import Genres from './pages/genres';
import Details from './pages/festival';
import Matchlist from './pages/matches';
import Profile from './pages/Profile';
import Settings from './pages/settings';
import ErrorState from './pages/errorstate';

const AuthRoutes = ({ isLoggedIn, theme, setTheme }) => {
  if (isLoggedIn) {
    return (
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
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={SplashAnimation} />
      <Route exact path="/welcome">
        <Welcome onThemeChange={setTheme} theme={theme} />
      </Route>
      <Route exact path="/genres" component={Genres} />
      <Route exact path="/festivals/:festivalId" component={Details} />
      <Route exact path="/festivals" component={Matchlist} />
      <Route component={ErrorState} />
    </Switch>
  );
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  isLoggedIn: PropTypes.bool,
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};
