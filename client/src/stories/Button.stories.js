import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const Small = () => (
  <Button size="Small" type="submit" onClick={action('clicked')}>
    Small button
  </Button>
);

export const Medium = () => (
  <Button size="Medium" onClick={action('clicked')}>
    Medium button
  </Button>
);

export const Large = () => (
  <Button size="Large" type="submit" onClick={action('clicked')}>
    large
  </Button>
);
