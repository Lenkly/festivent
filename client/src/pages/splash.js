import React, { useEffect } from 'react';
import StartAnimation from '../components/StartAnimation';

function SplashAnimation() {
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

export default SplashAnimation;
