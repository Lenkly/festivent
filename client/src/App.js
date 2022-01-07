import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './themes/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import AuthProvider from './contexts/AuthProvider';
import SplashAnimation from './pages/splash';
import Welcome from './pages/Welcome';
import Genres from './pages/genres';
import Details from './pages/festival';
import Matchlist from './pages/matches';
import Profile from './pages/Profile';
import Settings from './pages/settings';
import ErrorState from './pages/errorstate';
import { darkmode } from './themes/theme';
import { AuthContext } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import { AuthRoutes } from './AuthRoutes';

function App() {
  const [theme, setTheme] = useState(darkmode);
  const { token, userId, login, logout } = useAuth();
  const isLoggedIn = !!token;

  return (
    <>
      {/* <AuthContext.Provider value={{token, login, logout, userId, isLoggedIn}}> */}
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
          {/* <AuthRoutes
            isLoggedIn={isLoggedIn}
            theme={theme}
            setTheme={setTheme}
          /> */}
        </Router>
      </ThemeProvider>
      {/* </AuthContext.Provider> */}
    </>
  );
}

export default App;
