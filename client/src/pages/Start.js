import React from 'react';
import StartAnimation from '../components/StartAnimation';

let timeout;

function Start() {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    window.location = '/Welcome';
  }, 4000);

  return <StartAnimation />;
}

export default Start;
