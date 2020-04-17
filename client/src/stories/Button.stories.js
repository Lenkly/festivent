import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const Signup = () => (
  <Button size="Small" type="submit" onClick={action('clicked')}>
    Sign Up
  </Button>
);

export const Login = () => (
  <Button size="Small" type="submit" onClick={action('clicked')}>
    Log In
  </Button>
);

export const Logout = () => (
  <Button size="Small" onClick={action('clicked')}>
    Log Out
  </Button>
);

export const Profile = () => (
  <Button size="Small" onClick={action('clicked')}>
    Profile
  </Button>
);

export const Newmatch = () => (
  <Button size="Small" onClick={action('clicked')}>
    New Match
  </Button>
);

export const Again = () => (
  <Button size="Medium" onClick={action('clicked')}>
    Match Me Again
  </Button>
);

export const Match = () => (
  <Button size="Large" type="submit" onClick={action('clicked')}>
    Match Me
  </Button>
);
