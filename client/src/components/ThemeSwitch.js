import React from 'react';
import Switch from 'react-switch';

function Themeswitch() {
  const [isToggled, setToggled] = React.useState(false);

  const handleChange = () => setToggled(!isToggled);

  return (
    <Switch
      onChange={handleChange}
      checked={isToggled}
      aria-labelledby="neat-label"
      offColor="#FF00F2"
      onColor="#59FF00"
      width={75}
      height={34}
      handleDiameter={32}
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}

export default Themeswitch;
