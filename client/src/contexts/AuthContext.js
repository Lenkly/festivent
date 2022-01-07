import { createContext, useContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isLoggedIn: false,
});

export function useAuth() {
  return useContext(AuthContext);
}
