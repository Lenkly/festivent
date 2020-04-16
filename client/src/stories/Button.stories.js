import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export const Signup = () => (
  <Button type="submit" onClick={action('clicked')}>
    Sign Up
  </Button>
);

export const Login = () => (
  <Button type="submit" onClick={action('clicked')}>
    Log In
  </Button>
);

export const Logout = () => (
  <Button onClick={action('clicked')}>Log Out</Button>
);

export const Profile = () => (
  <Button onClick={action('clicked')}>Profile</Button>
);

export const Newmatch = () => (
  <Button onClick={action('clicked')}>New Match</Button>
);
