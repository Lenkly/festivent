import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

export const ArtistButton = styled.button`
  font-size: ${(props) => props.theme.fontsize.xxs};
  background: transparent;
  padding: 9px 8px;
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: ${(props) => props.theme.borderradius.extrasmall};
  box-shadow: 0 0 0px 100px ${(props) => props.theme.colors.background};
`;

const Cell = styled.div`
  padding: 2px;
  overflow: hidden;
`;
const Fill = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const LineUpArtistButton = ({ artist }) => {
  return (
    <React.Fragment>
      <Cell>
        <ArtistButton>{artist}</ArtistButton>
      </Cell>
      <Fill />
    </React.Fragment>
  );
};

LineUpArtistButton.propTypes = {
  artist: PropTypes.string,
};
