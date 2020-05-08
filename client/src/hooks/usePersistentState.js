import React from 'react';

function loadFromStorage(key) {
  try {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function usePersistentState(key, initialValue) {
  const [value, setValue] = React.useState(
    loadFromStorage(key) || initialValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default usePersistentState;
