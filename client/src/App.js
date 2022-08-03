import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route exact path="/" element={<SplashAnimation />} />
            <Route
              exact
              path="welcome"
              element={<Welcome onThemeChange={setTheme} theme={theme} />}
            />
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
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
