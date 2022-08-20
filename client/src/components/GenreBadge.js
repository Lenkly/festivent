import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

export const StyledBadge = styled.button`
  width: auto;
  height: auto;
  border: solid 1px;
  border-color: ${(props) =>
    props.selected
      ? props.theme.colors.texthighlight
      : props.theme.colors.text};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.texthighlight
      : props.theme.colors.text};
  background: none;
  font-size: ${(props) => props.theme.fontsize.xxs};
  border-radius: ${(props) => props.theme.borderradius.medium};
  padding: 5px 10px;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;

const GenreBadge = ({ selected, genre }) => {
  return (
    <>
      <StyledBadge selected={selected}>{genre}</StyledBadge>
    </>
  );
};

GenreBadge.propTypes = {
  selected: PropTypes.bool,
  genre: PropTypes.string,
};

export default GenreBadge;
