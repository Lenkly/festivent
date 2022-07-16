import React, { useState } from 'react';
import Toggle from '../components/Toggle';

export default {
  title: 'Toggle',
};

export const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };
  return <Toggle toggleHandler={handleCheck} checked={checked} />;
};
