import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './themes/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { darkmode } from './themes/theme';
import AuthContext from './contexts/AuthContext';
import useAuth from './hooks/useAuth';
import AuthRoutes from './AuthRoutes';

function App() {
  const [theme, setTheme] = useState(darkmode);
  const { token, userId, login, logout } = useAuth();
  const isLoggedIn = !!token;

  return (
    <>
      <AuthContext.Provider
        value={{ token, login, logout, userId, isLoggedIn }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <AuthRoutes
              isLoggedIn={isLoggedIn}
              theme={theme}
              setTheme={setTheme}
            />
          </Router>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
