import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { brightmode, darkmode } from '../themes/theme';

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ToggleBody = styled.div`
  width: 55px;
  height: 25px;
  border-radius: ${(props) => props.theme.borderradius.large};
  background-color: ${(props) => (props.checked ? '#59FF00' : '#FF00F2')};
  transition: all 0.2s ease;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 1px;
  left: ${(props) => (props.checked ? '31px' : '1px')};
  width: 23px;
  height: 23px;
  border-radius: ${(props) => props.theme.borderradius.half};
  background-color: #fff;
  transition: all 0.25s ease;
`;

const HiddenInput = styled.input`
  border: 0;
  clip: rect(0px, 0px, 0px, 0px);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const Toggle = ({ checked, toggleHandler }) => {
  const handleClick = () => {
    if (checked === brightmode) {
      toggleHandler(darkmode);
    } else {
      toggleHandler(brightmode);
    }
  };

  return (
    <ToggleContainer onClick={handleClick}>
      <ToggleBody checked={checked === darkmode} />
      <ToggleCircle checked={checked === darkmode} />
      <HiddenInput
        type="button"
        role="switch"
        aria-labelledby="theme-switch-toggle"
      />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  toggleHandler: PropTypes.func,
};

export default Toggle;
