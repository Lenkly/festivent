import React from 'react';
import SignUp from '../components/modals/SignUp';

export default function Register() {
  return <SignUp closeModal={() => console.log('clicked close')} />;
}
