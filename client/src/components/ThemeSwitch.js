import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { brightmode, darkmode } from '../themes/theme';

function ThemeSwitch({ onChange, value }) {
  const handleChange = () => {
    if (value === brightmode) {
      onChange(darkmode);
    } else {
      onChange(brightmode);
    }
  };

  return (
    <Switch
      type="button"
      onChange={handleChange}
      checked={value === darkmode}
      aria-labelledby="theme-switch-toggle"
      offColor="#FF00F2"
      onColor="#59FF00"
      width={55}
      height={25}
      handleDiameter={23}
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}
ThemeSwitch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
};

export default ThemeSwitch;
