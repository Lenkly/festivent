import { useState, useEffect } from 'react';

function loadFromSessionStorage(key) {
  try {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function loadFromLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(
    loadFromSessionStorage(key) || initialValue
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default usePersistentState;
