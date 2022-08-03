import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const nonselectedStyle = (props) => css`
  background: ${props.theme.colors.buttonBackground};
`;

const selectedStyle = css`
  background: transparent;
`;

export const GenreButton = styled.button`
  width: 133px;
  height: 44px;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontsize.xs};
  ${(props) => (props.selected ? selectedStyle : nonselectedStyle(props))}
  border-radius: 16px;
  margin-top: 10px;
  box-shadow: 0 0 0px 50px ${(props) => props.theme.colors.background};
  cursor: pointer;
  :hover {
    background: transparent;
    transition: background 0.5s ease;
  }
`;

const Cell = styled.div`
  padding: 10px;
  overflow: hidden;
`;

export const ChooseGenreButton = ({ onGenreButtonClick, selected, genre }) => {
  return (
    <Cell>
      <GenreButton onClick={onGenreButtonClick} selected={selected}>
        {genre}
      </GenreButton>
    </Cell>
  );
};

ChooseGenreButton.propTypes = {
  onGenreButtonClick: PropTypes.func,
  selected: PropTypes.bool,
  genre: PropTypes.string,
};
