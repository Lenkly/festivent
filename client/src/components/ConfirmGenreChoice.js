import React from 'react';
import Button from '../components/Button';
import propTypes from 'prop-types';

function ConfirmGenreChoice({ disabled, onGenreChoiceClick }) {
  return (
    <Button
      type="submit"
      size="Large"
      disabled={disabled}
      onClick={onGenreChoiceClick}
    >
      Match Me
    </Button>
  );
}

ConfirmGenreChoice.propTypes = {
  disabled: propTypes.bool,
  onGenreChoiceClick: propTypes.func,
};

export default ConfirmGenreChoice;
