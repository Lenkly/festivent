import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export default AuthContext;
