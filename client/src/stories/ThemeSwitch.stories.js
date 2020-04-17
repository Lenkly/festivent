import React from 'react';
import Themeswitch from '../components/ThemeSwitch';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Theme Switch',
};

export const Toggleswitch = () => <Themeswitch onClick={action('clicked')} />;
