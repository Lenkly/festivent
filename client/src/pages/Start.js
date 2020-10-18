import React from 'react';
import StartAnimation from '../components/StartAnimation';

function Start() {
  React.useEffect(() => {
    const timeoutId = setTimeout(function () {
      window.location = '/Welcome';
    }, 3700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <StartAnimation />;
}

export default Start;
//hello test comment
