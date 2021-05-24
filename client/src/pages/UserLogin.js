import React from 'react';
import SignIn from '../components/modals/SignIn';

export default function UserLogin() {
  return <SignIn closeModal={() => console.log('clicked close')} />;
}
