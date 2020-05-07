import React from 'react';
import Button from '../components/Button';
import propTypes from 'prop-types';

function ConfirmGenreChoice({ genres, disabled, onGenreChoiceClick }) {
  return (
    <Button
      type="submit"
      size="Large"
      disabled={disabled}
      onClick={onGenreChoiceClick(genres)}
    >
      Match Me
    </Button>
  );
}

ConfirmGenreChoice.propTypes = {
  genres: propTypes.array,
  disabled: propTypes.bool,
  onGenreChoiceClick: propTypes.func,
};

export default ConfirmGenreChoice;
