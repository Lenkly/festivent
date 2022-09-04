import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

function writeUserDataToStorage(userData) {
  localStorage.setItem(storageName, JSON.stringify(userData));
}

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwt, id) => {
    setToken(jwt);
    setUserId(id);
    writeUserDataToStorage({ userId: id, token: jwt });
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};

export default useAuth;
