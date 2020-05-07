import React from 'react';
import Switch from 'react-switch';

function Themeswitch() {
  const [isToggled, setToggled] = React.useState(false);

  const handleChange = () => setToggled(!isToggled);

  return (
    <Switch
      onChange={handleChange}
      checked={isToggled}
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

export default Themeswitch;
