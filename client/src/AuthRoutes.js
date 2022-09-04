import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SplashAnimation from './pages/splash';
import Welcome from './pages/Welcome';
import Genres from './pages/genres';
import Details from './pages/festival';
import Matchlist from './pages/matches';
import Profile from './pages/Profile';
import Settings from './pages/settings';
import Start from './pages/start';
import ErrorState from './pages/errorstate';

const AuthRoutes = ({ isLoggedIn, theme, setTheme }) => {
  if (isLoggedIn) {
    return (
      <Routes>
        <Route exact path="/" element={<SplashAnimation />} />
        <Route
          exact
          path="welcome"
          element={<Welcome onThemeChange={setTheme} theme={theme} />}
        />
        <Route exact path="start" element={<Start />} />
        <Route exact path="genres" element={<Genres />} />
        <Route exact path="festivals/:festivalId" element={<Details />} />
        <Route exact path="festivals" element={<Matchlist />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="settings"
          element={<Settings onThemeChange={setTheme} theme={theme} />}
        />
        <Route element={ErrorState} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route exact path="/" element={<SplashAnimation />} />
      <Route
        exact
        path="welcome"
        element={<Welcome onThemeChange={setTheme} theme={theme} />}
      />
      <Route exact path="start" element={<Start />} />
      <Route exact path="genres" element={<Genres />} />
      <Route exact path="festivals/:festivalId" element={<Details />} />
      <Route exact path="festivals" element={<Matchlist />} />
      <Route element={ErrorState} />
    </Routes>
  );
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  isLoggedIn: PropTypes.bool,
  theme: PropTypes.object,
  setTheme: PropTypes.func,
};
