import React, { useEffect } from 'react';
import StartAnimation from '../components/StartAnimation';

function SplashAnimation() {
  let locationLink = '';
  if (sessionStorage.getItem('Name') !== null) {
    locationLink = 'start';
  } else {
    locationLink = 'welcome';
  }

  useEffect(() => {
    const timeoutId = setTimeout(function () {
      window.location = `/${locationLink}`;
    }, 3700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <StartAnimation />;
}

export default SplashAnimation;
