import React, { useEffect } from 'react';
import StartAnimation from '../components/StartAnimation';

function Start() {
  useEffect(() => {
    const timeoutId = setTimeout(function () {
      window.location = '/welcome';
    }, 3700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <StartAnimation />;
}

export default Start;
