import styled from '@emotion/styled';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckboxWrapper = styled.button`
  width: auto;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 25px;
`;

const CheckboxLabel = styled.label`
  text-align: center;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontsize.m};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.colors.texthighlight};
    transition: background 0.5s ease;
  }
`;

const Checkbox = ({ label, icon, onFavouriteClick, ...props }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <CheckboxWrapper onClick={onFavouriteClick}>
        <input
          id="checkbox"
          type="checkbox"
          style={{ display: 'none' }}
          checked={isChecked}
          onChange={() => {
            setChecked(!isChecked);
          }}
          {...props}
        />
        <span>{icon}</span>
        <CheckboxLabel htmlFor="checkbox">&ensp;{label}</CheckboxLabel>
      </CheckboxWrapper>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  onFavouriteClick: PropTypes.func,
};

export default Checkbox;
